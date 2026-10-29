# Oak Hill Settlement - Shared Context Documentation

This folder contains shared context and knowledge that informs both subdomain websites (owners and recall).

## 📁 Files

### `ai-context.md`
Comprehensive homeowner rights and governance guide including:
- Historical context (Porras v. Vial Fotheringham, D. Or. 2015)
- Governance hierarchy
- Board limitations under Oregon law
- Documented patterns of procedural defects
- ARC timeline requirements
- Board recall procedures
- Enforcement rights and protections

**Usage:**
- Informs AI assistant system prompts in both apps
- Source material for "Know Your Rights" page
- Reference for homeowner education

## 🔄 How Context is Shared

### 1. AI System Prompts
Both apps can reference this context in their AI configurations:

```typescript
// apps/owners/src/app/api/chat/route.ts
// apps/recall/src/app/api/chat/route.ts (if added)
```

Context includes:
- Porras federal case details
- VF Law's history
- 2012 Fine Declaration (unvoted)
- Procedural defect patterns
- Homeowner rights under ORS 94

### 2. Programmatic Access
Apps can import structured context via shared package:

```typescript
import { hoaContext } from '@oakhillsettlement/config';

// Access specific information
const recallInfo = hoaContext.homeownerRights.ors94Protections.boardRecall;
// { statute: "ORS 94.640(6); Bylaws §§3.4, 3.6, 4.6", petitionThreshold: "30% of owners (59 lots)", ... }
```

### 3. Direct Pages
Context is presented directly to homeowners:
- `/rights` - "Know Your Rights" comprehensive guide
- `/documents` - Access to all governing documents
- `/chat` - AI assistant trained on this context

## 🎯 Purpose

This shared context ensures:
- ✅ Consistent messaging across both sites
- ✅ Accurate AI responses
- ✅ Homeowner empowerment through education
- ✅ Documentation of patterns and history
- ✅ Reference to legal precedents

## 📝 Maintaining This Context

### Adding New Information

1. **Update `ai-context.md`** with new facts, patterns, or legal developments
2. **Update `packages/config/hoa-context.ts`** for programmatic access
3. **Update AI system prompts** in relevant apps
4. **Update pages** as needed (`/rights`, etc.)

### Principles

- **Factual**: All information should be verifiable
- **Non-inflammatory**: Stick to documented facts
- **Legally sound**: Reference specific statutes and documents
- **Empowering**: Help homeowners understand their rights
- **Balanced**: Present fair, accurate information

## 🔗 Cross-Reference

### Between Apps

**Owners Site** (`owners.oakhillsettlement.homes`):
- Comprehensive document library
- AI assistant with full context
- "Know Your Rights" detailed guide
- Financial transparency

**Recall Site** (`recall.oakhillsettlement.homes`):
- Organizing and advocacy focus
- Action items for reform
- Links to owners site for detailed information
- Movement building

Both sites reference the same factual foundation but serve different purposes:
- **Owners** = Information & Education
- **Recall** = Action & Organizing (Recall Campaign)

## 📚 Related Files

- `/apps/owners/src/app/rights/page.tsx` - Rights guide page
- `/apps/owners/src/app/api/chat/route.ts` - AI system prompt
- `/packages/config/hoa-context.ts` - Programmatic context
- `/apps/owners/public/documents/` - Actual PDFs

## ⚖️ Legal Considerations

This context is:
- ✅ Based on public court records (Porras v. Vial Fotheringham, D. Or. 2015)
- ✅ Based on Oregon Revised Statutes (ORS 94)
- ✅ Based on publicly available HOA documents
- ✅ Factual and verifiable
- ✅ Educational in nature

**Not legal advice** - always encourage homeowners to consult attorneys for their specific situations.

## 🔄 Version Control

Keep this context:
- **Up to date** with new developments
- **Factual** with proper citations
- **Accessible** to all homeowners
- **Synced** across all applications

Last updated: November 2024

