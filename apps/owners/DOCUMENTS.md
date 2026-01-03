# PDF Document Management Guide

Complete guide for managing OCR-enabled, accessible PDF documents for Oak Hill Settlement.

## Why OCR Matters

**OCR (Optical Character Recognition)** makes PDFs accessible to:
- Screen reader users (visually impaired)
- Search engines (SEO)
- Text selection and copying
- AI assistants (for RAG/chat features)

Without OCR, PDFs are just images - inaccessible and unusable for assistive technology.

## Tools for Creating OCR PDFs

### Option 1: Adobe Acrobat Pro (Best Quality)

**Cost**: $20-30/month subscription

1. Open PDF in Adobe Acrobat
2. Go to **Tools → Enhance Scans → Recognize Text**
3. Settings:
   - Document Language: English
   - Output: Searchable Image
4. Click **Recognize Text**
5. Save file

### Option 2: ocrmypdf (Free, Command Line)

**Cost**: Free and open source

Install via Homebrew (Mac):
```bash
brew install ocrmypdf
```

Install via apt (Linux):
```bash
sudo apt install ocrmypdf
```

Usage:
```bash
# Basic OCR
ocrmypdf input.pdf output.pdf

# With optimization
ocrmypdf --optimize 3 --skip-text input.pdf output.pdf

# Batch process all PDFs in a folder
for file in *.pdf; do
  ocrmypdf "$file" "ocr-$file"
done
```

### Option 3: Online Services (Quick & Easy)

**Free Options**:
- [PDF24 Tools](https://tools.pdf24.org/en/ocr-pdf) - Free, no account needed
- [OCR.Space](https://ocr.space/) - Free API available
- [OnlineOCR](https://www.onlineocr.net/) - 15 files/hour free

**Paid Options**:
- [Adobe Acrobat Online](https://www.adobe.com/acrobat/online/pdf-ocr.html)
- [Smallpdf](https://smallpdf.com/ocr-pdf)

## Verifying OCR Quality

### Method 1: Try to Select Text
1. Open PDF in viewer
2. Try to select/highlight text
3. If you can't, OCR hasn't been applied

### Method 2: Test with Screen Reader
Mac (VoiceOver):
```bash
# Enable VoiceOver
Cmd + F5

# Navigate PDF to hear text read aloud
```

### Method 3: Check File Properties
```bash
# Install pdfinfo
brew install poppler

# Check if PDF has text
pdfinfo your-file.pdf

# Look for "Page size" and "Tagged"
```

## Document Naming Convention

Use clear, descriptive filenames:

✅ **Good**:
- `ccrs-2024-revised.pdf`
- `bylaws-oak-hill-2024.pdf`
- `meeting-minutes-2024-11-15.pdf`
- `architectural-guidelines-v2.pdf`

❌ **Bad**:
- `scan001.pdf`
- `Document1.pdf`
- `IMG_20241115.pdf`
- `untitled.pdf`

**Pattern**: `[document-type]-[date/version].pdf`

## Organizing Documents

### Recommended Folder Structure

```
public/documents/
├── governing/
│   ├── ccrs-2024.pdf
│   ├── bylaws-2024.pdf
│   └── architectural-guidelines.pdf
├── minutes/
│   ├── 2024/
│   │   ├── minutes-2024-01.pdf
│   │   ├── minutes-2024-02.pdf
│   │   └── ...
│   └── 2023/
│       └── ...
├── financial/
│   ├── budget-2024.pdf
│   ├── financial-q3-2024.pdf
│   └── audit-2023.pdf
└── reference/
    ├── ors-94-planned-communities.pdf
    └── hoa-best-practices.pdf
```

## Adding Documents to the Site

### 1. Prepare the PDF

```bash
# OCR the document
ocrmypdf --optimize 3 original.pdf ready.pdf

# Check file size (aim for < 10MB)
ls -lh ready.pdf

# If too large, compress:
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET \
   -dBATCH -sOutputFile=compressed.pdf ready.pdf
```

### 2. Add to Public Folder

```bash
cp ready.pdf public/documents/
```

### 3. Update Documents Page

Edit `src/app/documents/page.tsx`:

```typescript
{
  category: "Your Category",
  files: [
    {
      title: "Your Document Title",
      description: "Brief description of the document",
      filename: "your-document.pdf",
      date: "Updated: January 2024",
      size: "1.2 MB",
    },
    // ... more files
  ],
},
```

### 4. Deploy

```bash
git add public/documents/your-document.pdf
git add src/app/documents/page.tsx
git commit -m "Add new document: Your Document Title"
git push
```

## Metadata Best Practices

### PDF Properties

Set these in Adobe Acrobat (File → Properties):

- **Title**: Oak Hill Settlement CC&Rs
- **Author**: Oak Hill Settlement HOA Board  
- **Subject**: Covenants, Conditions, and Restrictions
- **Keywords**: HOA, CC&Rs, Forest Grove, Oregon
- **Language**: English

Command line (exiftool):
```bash
brew install exiftool

exiftool -Title="CC&Rs 2024" \
         -Author="Oak Hill HOA" \
         -Subject="Governing Documents" \
         your-document.pdf
```

## Accessibility Checklist

Before publishing any PDF:

- [ ] OCR applied and text is selectable
- [ ] Document has proper title in metadata
- [ ] Bookmarks/TOC created for long documents
- [ ] Tables have header rows marked
- [ ] Images have alt text (if applicable)
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Links are descriptive (not "click here")
- [ ] Language is set correctly
- [ ] File size is reasonable (< 10MB)
- [ ] Tested with screen reader

## Bulk Document Processing

### Script: Process All PDFs in Folder

Create `scripts/process-pdfs.sh`:

```bash
#!/bin/bash

# Configuration
INPUT_DIR="./incoming-docs"
OUTPUT_DIR="./public/documents"
TEMP_DIR="./temp-processing"

mkdir -p "$OUTPUT_DIR" "$TEMP_DIR"

# Process each PDF
for input_file in "$INPUT_DIR"/*.pdf; do
  filename=$(basename "$input_file")
  echo "Processing $filename..."
  
  # Step 1: OCR
  ocrmypdf --optimize 3 --skip-text \
    "$input_file" "$TEMP_DIR/$filename"
  
  # Step 2: Add metadata
  exiftool -overwrite_original \
    -Author="Oak Hill HOA" \
    -Language="en-US" \
    "$TEMP_DIR/$filename"
  
  # Step 3: Move to output
  mv "$TEMP_DIR/$filename" "$OUTPUT_DIR/$filename"
  
  echo "✅ Completed $filename"
done

# Cleanup
rm -rf "$TEMP_DIR"
echo "All documents processed!"
```

Usage:
```bash
chmod +x scripts/process-pdfs.sh
./scripts/process-pdfs.sh
```

## Storage and Backup

### Git LFS for Large Files

If you have many large PDFs:

```bash
# Install Git LFS
brew install git-lfs
git lfs install

# Track PDF files
git lfs track "*.pdf"
git add .gitattributes

# Now PDFs are tracked by LFS
git add public/documents/*.pdf
git commit -m "Add documents via LFS"
```

### Alternative: Cloud Storage

For very large document libraries:

1. **Upload to S3/Cloud Storage**
2. **Use CDN** for fast delivery
3. **Update links** in documents page to external URLs

Example with AWS S3:
```typescript
{
  title: "Large PDF",
  filename: "large-doc.pdf",
  external: true,
  url: "https://oak-hill-docs.s3.amazonaws.com/large-doc.pdf",
}
```

## Legal Considerations

### Oregon Public Records Law

**HOA documents may be subject to public records requests**. Consult with legal counsel about:

- Which documents must be publicly available
- Redaction requirements (personal info, addresses)
- Retention periods
- Member-only vs. public documents

### Document Retention

**Recommended retention periods** (consult your attorney):

| Document Type | Retention Period |
|--------------|------------------|
| CC&Rs, Bylaws | Permanent |
| Meeting Minutes | Permanent |
| Financial Records | 7 years |
| Tax Returns | 7 years |
| Contracts | 7 years after expiration |
| Correspondence | 3 years |
| Architectural Requests | Permanent (per property) |

## Troubleshooting

### PDF Won't OCR

**Problem**: ocrmypdf fails or produces poor results

**Solutions**:
1. Check if PDF is already OCR'd: `pdftotext file.pdf -`
2. Scan/image quality may be too low - rescan at 300+ DPI
3. Try different OCR engine: `ocrmypdf --tesseract-config tesseract.cfg`
4. Split multi-column layouts before OCR

### File Size Too Large

**Problem**: PDF is >10MB and slow to load

**Solutions**:

```bash
# Option 1: Ghostscript compression
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=compressed.pdf large.pdf

# Option 2: Reduce image quality
convert -density 150 -quality 60 large.pdf compressed.pdf

# Option 3: Split into multiple files
pdftk large.pdf burst output page_%04d.pdf
```

### Screen Reader Issues

**Problem**: Screen reader can't read the PDF properly

**Solutions**:
1. Verify OCR is applied
2. Set reading order in Acrobat (Accessibility → Reading Order)
3. Tag the PDF properly (Accessibility → Autotag Document)
4. Test with NVDA (Windows) or VoiceOver (Mac)

## Resources

### Tools
- [ocrmypdf](https://github.com/ocrmypdf/OCRmyPDF) - Free OCR
- [PDF Accessibility Checker](https://www.access-for-all.ch/en/pdf-lab/pdf-accessibility-checker-pac.html)
- [Adobe Acrobat](https://www.adobe.com/acrobat.html) - Full-featured PDF editor

### Guides
- [WebAIM: PDF Accessibility](https://webaim.org/techniques/acrobat/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Oregon HOA Law (ORS 94)](https://www.oregonlegislature.gov/bills_laws/ors/ors094.html)

### Accessibility Testing
- [NVDA Screen Reader](https://www.nvaccess.org/) (Windows, Free)
- [VoiceOver](https://support.apple.com/guide/voiceover/welcome/mac) (Mac, Built-in)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)

## Support

For questions about document management:
- Technical: See main README
- Legal: Consult HOA attorney
- Accessibility: info@oakhillsettlement.homes

