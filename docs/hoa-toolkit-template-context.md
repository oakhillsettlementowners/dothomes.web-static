# HOA Owner Toolkit - Template Creation Context

> This document contains all context needed to create an open-source template from the Oak Hill Settlement HOA toolkit. Use this to prompt a new AI chat session for template creation.

---

## Overview

A working HOA owner toolkit was built for Oak Hill Settlement HOA in Forest Grove, Oregon. The goal is to extract a reusable, open-source template that other homeowners can deploy for their own HOAs.

### What Was Built

1. **Owners App** (`owners.oakhillsettlement.homes`) - Community hub
   - Document archive with governing docs (CC&Rs, Bylaws, Plat, etc.)
   - AI chat assistant trained on Oregon HOA law (ORS 94) and governing documents
   - Homeowner rights guide
   - ARC (Architectural Review Committee) timeline assistant

2. **Recall App** (`recall.oakhillsettlement.homes`) - Governance action toolkit
   - Information about recall process
   - Petition/proxy vote collection form with email notifications
   - Legal compliance for Oregon proxy voting (ORS 94.647)

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | Next.js 14 (App Router) | React-based full-stack framework |
| Monorepo | Turborepo | Manages multiple apps (owners, recall) |
| Styling | Tailwind CSS | Utility-first CSS with custom color palette |
| Hosting | Vercel | Deployment, serverless functions, edge |
| DNS | Cloudflare | DNS management, DDoS protection |
| Email Routing (inbound) | Cloudflare Email Routing | Forward custom domain emails to real inbox |
| Email Sending (outbound) | Resend | Transactional emails via API |
| AI/LLM | OpenAI GPT-4 | Chat assistant responses |
| Vector Database | Pinecone | Document embeddings for semantic search |
| Package Manager | pnpm | Fast, disk-efficient package management |

### Alternative Technologies (for template docs)

| Layer | Alternatives |
|-------|--------------|
| Hosting | Netlify, Cloudflare Pages, Railway, self-hosted |
| Email Sending | SendGrid, Postmark, AWS SES, Mailgun |
| AI/LLM | Anthropic Claude, local models (Ollama/llama.cpp) |
| Vector DB | Weaviate, Chroma, Supabase pgvector, Qdrant |
| DNS | Route53, Vercel DNS, Namecheap |

---

## Repository Structure

```
dothomes/dothomes.web-static/
├── apps/
│   ├── owners/                 # Community hub app
│   │   ├── src/
│   │   │   ├── app/           # Next.js App Router pages
│   │   │   │   ├── page.tsx   # Home page
│   │   │   │   ├── rights/    # Homeowner rights guide
│   │   │   │   ├── documents/ # Document archive
│   │   │   │   ├── chat/      # AI assistant
│   │   │   │   └── api/       # API routes (chat endpoint)
│   │   │   └── components/    # React components
│   │   └── public/
│   │       └── documents/     # Static PDF/document storage
│   │
│   └── recall/                 # Recall petition app
│       └── src/
│           └── app/
│               ├── page.tsx   # Recall info page
│               ├── petition/  # Petition form
│               └── api/
│                   └── petition/
│                       └── route.ts  # Form submission + email
│
├── packages/
│   └── config/
│       └── hoa-context.ts     # HOA-specific configuration
│
├── turbo.json                  # Turborepo configuration
└── package.json                # Root package.json
```

---

## Key Features to Template

### 1. HOA Configuration (`packages/config/hoa-context.ts`)

Centralized configuration that should be customizable:
- HOA name
- Location (city, state, zip)
- Number of lots
- Street names in community
- State law references (e.g., "ORS 94" for Oregon)

### 2. Petition/Proxy Vote Form

**Current Implementation:**
- Form collects: name, address, email, confirmations
- Validates required fields
- Sends two emails via Resend API:
  1. Organizer notification (to recall@domain)
  2. Homeowner confirmation (to submitter)

**Email Content Includes:**
- Submission timestamp
- Explicit scope ("Board recall election ONLY")
- Expiration date (11 months from submission per ORS 94.647(3))
- Revocation instructions ("Email recall@domain to revoke")
- ORS legal reference

**Proxy Vote Legal Compliance (Oregon-specific, needs generalization):**
- ORS 94.647 governs proxies for planned communities
- Proxies limited to 11 months unless specified otherwise
- Must be revocable
- Should specify scope and proxy holder

### 3. Email Architecture

**Addresses Used:**
| Address | Sends | Receives | Purpose |
|---------|-------|----------|---------|
| `petition@recall.domain` | ✅ | ❌ | FROM address for automated emails |
| `recall@domain` | ❌ | ✅ | Organizer inbox, revocation requests |
| `info@domain` | ✅ | ✅ | General contact |

**Setup Required:**
1. Verify domain in Resend (add DKIM DNS records)
2. Configure Cloudflare Email Routing for receiving
3. Set up Gmail "Send mail as" for replying from custom domain

### 4. AI Chat Assistant

**Current Setup:**
- Documents chunked and embedded in Pinecone
- OpenAI GPT-4 for response generation
- System prompt includes Oregon HOA law context
- Retrieval-augmented generation (RAG) pattern

**For Template:**
- Users need to OCR their governing documents
- Upload/embed their own documents to vector DB
- Customize system prompt for their state's laws

### 5. Document Preparation (Critical)

**Problem:** Many HOAs have scanned image PDFs that AI cannot read.

**Solution - OCR Process:**
1. Check if PDF is text-based (try to select text)
2. If image-based, run OCR:
   - OCRmyPDF (free, open source): `ocrmypdf input.pdf output.pdf`
   - Adobe Acrobat Pro
   - Google Drive (upload → Open with Docs)
3. Verify OCR accuracy (old/faded docs may have errors)
4. Store both original and OCR'd versions

### 6. Recall Banner (Feature Flag)

**Implementation:**
- Environment variable: `NEXT_PUBLIC_SHOW_RECALL_BANNER`
- Two banner instances in DOM (mobile + desktop)
- Mobile: Sticky at viewport top (in layout.tsx)
- Desktop: Within header, sticks with nav

---

## State Law Generalization

Currently hardcoded for Oregon (ORS 94). Template needs:

**Per-State Configuration:**
```
state-laws/
├── oregon.ts      # ORS 94 (Planned Communities Act)
├── california.ts  # Davis-Stirling Act
├── texas.ts       # Property Code Chapter 209
├── florida.ts     # Chapter 720 (HOA Act)
└── ...
```

**Each State File Contains:**
- Primary HOA statute citation
- Proxy voting rules
- Recall/removal procedures
- Meeting notice requirements
- Homeowner rights provisions

---

## Environment Variables

**Required:**
```
# AI
OPENAI_API_KEY=
PINECONE_API_KEY=
PINECONE_INDEX_NAME=

# Email (Resend)
RESEND_API_KEY=
NOTIFICATION_EMAIL=recall@yourdomain.com

# Feature Flags
NEXT_PUBLIC_SHOW_RECALL_BANNER=false
```

**In turbo.json globalEnv:**
```json
"globalEnv": [
  "OPENAI_API_KEY",
  "PINECONE_API_KEY",
  "PINECONE_GEN_API_KEY",
  "PINECONE_INDEX_NAME",
  "RESEND_API_KEY",
  "NOTIFICATION_EMAIL"
]
```

---

## Template Setup Flow (Interactive)

When user runs setup script, prompt for:

1. **HOA Information**
   - HOA name
   - City, State, ZIP
   - Number of lots

2. **Domain Configuration**
   - Primary domain (e.g., `yourhoa.org`)
   - Subdomains: `owners.`, `recall.` (optional)

3. **State Selection**
   - Dropdown/search of US states
   - Loads appropriate legal references
   - Warns if state law module not yet available

4. **Features to Enable**
   - [ ] Document archive
   - [ ] AI chat assistant
   - [ ] Recall petition system
   - [ ] Rights guide

5. **Service Accounts**
   - Vercel account
   - Cloudflare account
   - Resend account
   - OpenAI API key (if AI enabled)
   - Pinecone account (if AI enabled)

---

## Design System

**Color Palette:**
- Primary: Earthy greens (forest/nature theme)
- Works in both light and dark mode
- Tailwind custom colors in `tailwind.config.ts`

**Typography:**
- Clean, readable fonts
- Mobile-first responsive design

**Components:**
- Sticky header with navigation
- Card-based content sections
- Accessible form inputs
- Toast/alert notifications

---

## Deployment Guide Outline

1. **Prerequisites**
   - Node.js 18+
   - pnpm
   - Accounts: Vercel, Cloudflare, Resend

2. **Clone & Configure**
   - Fork template repo
   - Run setup script
   - Edit configuration files

3. **Document Preparation**
   - OCR governing documents
   - Organize in `public/documents/`
   - (Optional) Train AI on documents

4. **DNS Setup**
   - Point domain to Cloudflare
   - Add Vercel DNS records
   - Configure email routing

5. **Deploy**
   - Connect repo to Vercel
   - Set environment variables
   - Deploy

6. **Email Setup**
   - Verify domain in Resend
   - Add DKIM records
   - Configure Gmail "Send as" (optional)

---

## Future Enhancements (Ideas)

- [ ] Database for petition tracking (Supabase/PlanetScale)
- [ ] Admin dashboard for organizers
- [ ] Automated signature verification
- [ ] Multi-language support
- [ ] Integration with county assessor data
- [ ] Meeting scheduler/calendar
- [ ] Expense tracking/transparency tools

---

## Reference Implementation

The working implementation is at:
- Repository: `oakhillsettlementowners/dothomes.web-static`
- Live sites:
  - https://owners.oakhillsettlement.homes
  - https://recall.oakhillsettlement.homes

---

## License Recommendation

MIT or Apache 2.0 - permissive open source that allows:
- Commercial use
- Modification
- Distribution
- Private use

---

## Contact / Consulting

For non-technical homeowners who need help deploying:
- Setup assistance
- Document OCR services
- Custom state law modules
- Ongoing maintenance

(Add contact info when publishing template)

