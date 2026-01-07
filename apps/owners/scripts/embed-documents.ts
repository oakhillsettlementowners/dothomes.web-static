/**
 * Document Embedding Script for RAG
 * 
 * This script processes all PDF documents in public/documents/
 * and creates vector embeddings stored in Pinecone for semantic search.
 * 
 * Usage: pnpm run embed (from apps/owners directory)
 */

// Load environment variables FIRST
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { Pinecone } from '@pinecone-database/pinecone';
import OpenAI from 'openai';
import pdf from 'pdf-parse';
import fs from 'fs';
import path from 'path';

const CHUNK_SIZE = 1000; // Characters per chunk
const CHUNK_OVERLAP = 200; // Overlap between chunks for context continuity

// Initialize clients after dotenv loads
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

interface DocumentChunk {
  id: string;
  text: string;
  source: string;
  category: string;
  page?: number;
}

/**
 * Recursively find all PDF files in a directory
 */
function findPDFs(dir: string, category: string = ''): { path: string; category: string }[] {
  const files: { path: string; category: string }[] = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Use directory name as category
      files.push(...findPDFs(fullPath, item));
    } else if (item.toLowerCase().endsWith('.pdf')) {
      files.push({ path: fullPath, category: category || 'general' });
    }
  }

  return files;
}

/**
 * Split text into overlapping chunks
 */
function splitIntoChunks(text: string, chunkSize: number, overlap: number): string[] {
  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    const chunk = text.slice(start, end).trim();
    
    if (chunk.length > 50) { // Only keep meaningful chunks
      chunks.push(chunk);
    }
    
    start += chunkSize - overlap;
  }

  return chunks;
}

/**
 * Create embedding for a text chunk
 */
async function createEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return response.data[0].embedding;
}

/**
 * Process a single PDF file
 */
async function processPDF(filePath: string, category: string): Promise<DocumentChunk[]> {
  const fileName = path.basename(filePath);
  console.log(`  Processing: ${fileName}`);

  try {
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdf(dataBuffer);
    
    const text = pdfData.text;
    const chunks = splitIntoChunks(text, CHUNK_SIZE, CHUNK_OVERLAP);
    
    console.log(`    Found ${chunks.length} chunks`);

    return chunks.map((chunk, index) => ({
      id: `${fileName.replace(/[^a-zA-Z0-9]/g, '_')}-chunk-${index}`,
      text: chunk,
      source: fileName,
      category: category,
    }));
  } catch (error) {
    console.error(`    Error processing ${fileName}:`, error);
    return [];
  }
}

/**
 * Main embedding function
 */
async function embedDocuments() {
  console.log('🚀 Starting document embedding process...\n');

  // Verify environment variables
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not set');
  }
  if (!process.env.PINECONE_API_KEY) {
    throw new Error('PINECONE_API_KEY is not set');
  }
  if (!process.env.PINECONE_INDEX_NAME) {
    throw new Error('PINECONE_INDEX_NAME is not set');
  }

  const indexName = process.env.PINECONE_INDEX_NAME;
  console.log(`📌 Using Pinecone index: ${indexName}\n`);

  // Get Pinecone index
  const index = pinecone.index(indexName);

  // Find all PDFs
  const docsDir = path.join(process.cwd(), 'public/documents');
  const pdfFiles = findPDFs(docsDir);
  
  console.log(`📄 Found ${pdfFiles.length} PDF files:\n`);
  pdfFiles.forEach(f => console.log(`   - [${f.category}] ${path.basename(f.path)}`));
  console.log('');

  // Process each PDF
  const allChunks: DocumentChunk[] = [];
  for (const { path: filePath, category } of pdfFiles) {
    const chunks = await processPDF(filePath, category);
    allChunks.push(...chunks);
  }

  console.log(`\n📊 Total chunks to embed: ${allChunks.length}\n`);

  // Create embeddings and upsert to Pinecone
  const batchSize = 50; // Process in batches to avoid rate limits
  let processed = 0;

  for (let i = 0; i < allChunks.length; i += batchSize) {
    const batch = allChunks.slice(i, i + batchSize);
    
    // Create embeddings for batch
    const vectors = await Promise.all(
      batch.map(async (chunk) => {
        const embedding = await createEmbedding(chunk.text);
        return {
          id: chunk.id,
          values: embedding,
          metadata: {
            text: chunk.text,
            source: chunk.source,
            category: chunk.category,
          },
        };
      })
    );

    // Upsert to Pinecone
    await index.upsert(vectors);
    
    processed += batch.length;
    console.log(`   Embedded ${processed}/${allChunks.length} chunks`);

    // Small delay to avoid rate limits
    if (i + batchSize < allChunks.length) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  console.log('\n✅ All documents embedded successfully!');
  console.log(`\n📈 Summary:`);
  console.log(`   - Files processed: ${pdfFiles.length}`);
  console.log(`   - Total chunks: ${allChunks.length}`);
  console.log(`   - Index: ${indexName}`);
}

// Run the script
embedDocuments().catch((error) => {
  console.error('\n❌ Embedding failed:', error.message);
  process.exit(1);
});

