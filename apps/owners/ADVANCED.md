# Advanced AI Features - RAG Implementation

This guide explains how to implement RAG (Retrieval Augmented Generation) for more accurate, document-specific AI responses.

## What is RAG?

RAG enhances the AI by:
1. **Converting documents to embeddings** (vector representations)
2. **Storing in a vector database** for fast semantic search
3. **Retrieving relevant sections** before answering questions
4. **Providing context** to the AI for more accurate responses

## Benefits

- ✅ AI answers cite specific documents
- ✅ More accurate responses about your HOA
- ✅ Works with large document collections
- ✅ Stays up-to-date as you add documents

## Implementation Options

### Option 1: Pinecone (Easiest)

**Pros**: Managed, scalable, free tier available
**Cons**: External service, monthly cost at scale

```bash
pnpm add @pinecone-database/pinecone
```

### Option 2: Supabase Vector

**Pros**: Open source, PostgreSQL-based, affordable
**Cons**: Requires Supabase account

```bash
pnpm add @supabase/supabase-js
```

### Option 3: Local Vector DB (Weaviate/Qdrant)

**Pros**: Self-hosted, full control, free
**Cons**: More complex setup, hosting required

## Step-by-Step: Pinecone RAG

### 1. Install Dependencies

```bash
pnpm add @pinecone-database/pinecone pdf-parse langchain
```

### 2. Set Up Pinecone

1. Sign up at https://www.pinecone.io/
2. Create an index:
   - **Name**: `oak-hill-docs`
   - **Dimensions**: 1536 (for OpenAI ada-002 embeddings)
   - **Metric**: cosine

3. Add to `.env.local`:
```bash
PINECONE_API_KEY=your-key
PINECONE_ENVIRONMENT=your-environment
PINECONE_INDEX_NAME=oak-hill-docs
```

### 3. Create Embeddings Script

Create `scripts/embed-documents.ts`:

```typescript
import { PineconeClient } from '@pinecone-database/pinecone';
import { OpenAI } from 'openai';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import fs from 'fs';
import path from 'path';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const pinecone = new PineconeClient();

async function embedDocuments() {
  // Initialize Pinecone
  await pinecone.init({
    apiKey: process.env.PINECONE_API_KEY!,
    environment: process.env.PINECONE_ENVIRONMENT!,
  });
  
  const index = pinecone.Index(process.env.PINECONE_INDEX_NAME!);
  
  // Get all PDFs
  const docsDir = path.join(process.cwd(), 'public/documents');
  const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.pdf'));
  
  for (const file of files) {
    console.log(`Processing ${file}...`);
    
    // Load PDF
    const loader = new PDFLoader(path.join(docsDir, file));
    const docs = await loader.load();
    
    // Split into chunks
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });
    const chunks = await splitter.splitDocuments(docs);
    
    // Create embeddings and upload
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      
      // Get embedding from OpenAI
      const embedding = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input: chunk.pageContent,
      });
      
      // Upload to Pinecone
      await index.upsert([{
        id: `${file}-chunk-${i}`,
        values: embedding.data[0].embedding,
        metadata: {
          text: chunk.pageContent,
          source: file,
          page: chunk.metadata.page || 0,
        },
      }]);
      
      console.log(`  Embedded chunk ${i + 1}/${chunks.length}`);
    }
  }
  
  console.log('✅ All documents embedded!');
}

embedDocuments().catch(console.error);
```

### 4. Run Embedding Script

```bash
npx tsx scripts/embed-documents.ts
```

### 5. Update Chat API Route

Update `src/app/api/chat/route.ts`:

```typescript
import { PineconeClient } from '@pinecone-database/pinecone';

const pinecone = new PineconeClient();
await pinecone.init({
  apiKey: process.env.PINECONE_API_KEY!,
  environment: process.env.PINECONE_ENVIRONMENT!,
});
const index = pinecone.Index(process.env.PINECONE_INDEX_NAME!);

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const userMessage = messages[messages.length - 1].content;
  
  // 1. Create embedding of user's question
  const queryEmbedding = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: userMessage,
  });
  
  // 2. Search Pinecone for relevant chunks
  const results = await index.query({
    vector: queryEmbedding.data[0].embedding,
    topK: 3,
    includeMetadata: true,
  });
  
  // 3. Build context from relevant chunks
  const context = results.matches
    .map(match => `[From ${match.metadata.source}]:\n${match.metadata.text}`)
    .join('\n\n---\n\n');
  
  // 4. Enhanced system prompt with retrieved context
  const enhancedPrompt = `${SYSTEM_PROMPT}

RELEVANT DOCUMENT EXCERPTS:
${context}

Use the above excerpts to answer the user's question accurately. Cite the source document when possible.`;
  
  // 5. Generate response with context
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: enhancedPrompt },
      ...messages,
    ],
  });
  
  return NextResponse.json({
    message: completion.choices[0].message.content,
  });
}
```

## Cost Analysis

### Embedding Costs
- **OpenAI ada-002**: $0.0001 per 1K tokens
- **Average PDF** (50 pages): ~$0.10 to embed
- **One-time cost** for initial upload
- **Incremental cost** for new documents

### Query Costs
- **Pinecone Free Tier**: 
  - 1 index
  - 100K vectors
  - Sufficient for small HOAs
- **Pinecone Paid**: $70/month (1M vectors)

### Total Monthly Cost Estimate
- **Small HOA** (10-20 docs, 100 users): ~$10-30/month
- **Medium HOA** (50+ docs, 500 users): ~$50-100/month

## Maintenance

### Adding New Documents

```bash
# 1. Add PDF to public/documents/
cp new-doc.pdf public/documents/

# 2. Re-run embedding script
npx tsx scripts/embed-documents.ts

# 3. Done! New document is searchable
```

### Updating Documents

```bash
# Delete old embeddings
# Re-run embedding script with updated file
```

## Alternative: Simple Semantic Search

For smaller deployments, you can implement basic semantic search without a vector database:

1. **Pre-process documents** into JSON at build time
2. **Store embeddings** in a static JSON file
3. **Search client-side** or in API route
4. **No external database needed**

See `scripts/simple-rag.ts` for implementation.

## Troubleshooting

### Embeddings Taking Too Long
- Process documents in parallel
- Use smaller chunk sizes
- Batch API requests

### Poor Search Results
- Increase `topK` parameter
- Adjust chunk size/overlap
- Improve document metadata
- Fine-tune search query

### High Costs
- Use GPT-4o-mini instead of GPT-4
- Cache common queries
- Implement rate limiting
- Consider local embeddings models

## Next Steps

1. **Try basic implementation** without RAG first
2. **Evaluate usage** over first month
3. **Add RAG** if needed for better accuracy
4. **Monitor costs** and optimize

For questions, see main README or contact technical support.

