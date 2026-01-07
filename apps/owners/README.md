# Oak Hill Settlement Owners Portal

An independent, community-driven hub for Oak Hill Settlement homeowners in Forest Grove, Oregon.

**Important**: This site is NOT affiliated with the Oak Hill Settlement HOA Board of Directors or property management company. It is created BY homeowners FOR homeowners to promote transparency, empower residents, and foster community.

## Features

### 📄 Community Document Archive
- Independent archive of HOA documents (CC&Rs, bylaws, architectural guidelines)
- Meeting minutes and financial reports (community-maintained)
- Oregon law references (ORS Chapter 94)
- All PDFs are OCR-enabled for screen readers
- Homeowner-contributed and verified

### 🤖 AI-Powered Community Assistant
- Ask questions about HOA governance and homeowner rights
- Trained on Oregon HOA law (ORS 94) with emphasis on homeowner protections
- Knowledgeable about Oak Hill Settlement documents
- Independent tool for homeowner empowerment
- Powered by OpenAI GPT-4

### 🎨 Design
- Forest Grove-inspired green color scheme
- WCAG AA/AAA accessibility compliance
- High contrast dark mode
- Mobile-responsive design

## Setup

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure OpenAI API

Create `.env.local` in the `apps/owners` directory:

```bash
OPENAI_API_KEY=sk-...your-key-here
```

Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)

### 3. Add HOA Documents

Place PDF files in `public/documents/`:

```
public/documents/
├── ccrs-2024.pdf
├── bylaws-2024.pdf
├── architectural-guidelines.pdf
├── minutes-2024-11.pdf
└── ...
```

**Important**: Ensure all PDFs are OCR-enabled for accessibility. Use tools like Adobe Acrobat or online services to add OCR if needed.

### 4. Run Development Server

```bash
pnpm dev
```

Visit:
- Homepage: http://localhost:3000
- Documents: http://localhost:3000/documents
- AI Chat: http://localhost:3000/chat

## Deployment

### Vercel (Recommended)

This app requires serverless functions for the AI chat feature, making Vercel ideal:

1. Push to GitHub
2. Import to Vercel
3. Set environment variable: `OPENAI_API_KEY`
4. Deploy!

### Environment Variables

Required:
- `OPENAI_API_KEY` - Your OpenAI API key

### Cost Estimate

**OpenAI API Usage** (GPT-4o-mini):
- Input: ~$0.15 per 1M tokens
- Output: ~$0.60 per 1M tokens
- Average conversation (10 messages): ~$0.01

For a small community (~100 homeowners):
- Light usage: $5-10/month
- Moderate usage: $20-30/month
- Heavy usage: $50+/month

**Vercel Hosting**:
- Free tier includes serverless functions
- Pro plan ($20/month) if you need more

## Enhancing the AI Assistant

### Option 1: Basic (Current)
The AI uses GPT-4's general knowledge about HOA law plus the system prompt. Works well for general questions.

### Option 2: RAG with Vector Database
For more accurate, document-specific answers:

1. **Add Vector Database** (Pinecone, Weaviate, or Supabase Vector)
2. **Create Embeddings** from your PDFs
3. **Implement RAG** to retrieve relevant sections before answering

See `ADVANCED.md` for RAG implementation guide.

### Option 3: Fine-tuning
For very specific HOA knowledge:
- Fine-tune GPT-4 on your historical documents
- More expensive but highly customized
- Best for large communities with extensive history

## Document Management

### Adding New Documents

1. **OCR Your PDF**:
   ```bash
   # Using ocrmypdf (install via brew/apt)
   ocrmypdf input.pdf output.pdf
   ```

2. **Place in public/documents/**:
   ```bash
   cp your-document.pdf public/documents/
   ```

3. **Update document list** in `src/app/documents/page.tsx`:
   ```typescript
   {
     title: "Your Document Title",
     description: "Brief description",
     filename: "your-document.pdf",
     date: "Date",
     size: "File size",
   }
   ```

### Accessibility Best Practices

- ✅ All PDFs should have OCR text layer
- ✅ Use descriptive filenames
- ✅ Include document metadata (title, author, description)
- ✅ Provide alternative contact method for assistance

## Customization

### Updating AI System Prompt

Edit `src/app/api/chat/route.ts`:

```typescript
const SYSTEM_PROMPT = `
  Your custom instructions here...
`;
```

### Changing Colors

The site uses a shared Tailwind config. To customize:

1. Edit `tailwind.config.ts`
2. Modify the `primary` color palette
3. Adjust dark mode colors in `src/app/globals.css`

### Adding Pages

Create new pages in `src/app/`:

```typescript
// src/app/your-page/page.tsx
export default function YourPage() {
  return <div>Your content</div>;
}
```

## Troubleshooting

### AI Chat Not Working

1. Check `OPENAI_API_KEY` is set correctly
2. Verify API key has credits: https://platform.openai.com/usage
3. Check browser console for errors
4. Review API route logs in Vercel dashboard

### Documents Not Loading

1. Ensure PDFs are in `public/documents/`
2. Check filenames match exactly in `documents/page.tsx`
3. Verify PDFs aren't corrupted
4. Check file permissions

### Build Errors

```bash
# Clean and rebuild
pnpm clean
pnpm install
pnpm build
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-4o-mini
- **Deployment**: Vercel Serverless

## Support

For technical issues or feature requests, contact the HOA board at info@oakhillsettlement.homes

