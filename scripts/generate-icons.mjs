import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const SOURCE = path.join(ROOT, 'apps/owners/public/img/icon-maskable-512.png');

// Both apps get the same icons
const APPS = ['owners', 'recall'];

const ICONS = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
  { name: 'icon-maskable-192.png', size: 192 },
  { name: 'icon-maskable-512.png', size: 512 },
];

async function generateIcons() {
  console.log('Reading source icon...');
  const sourceBuffer = await fs.readFile(SOURCE);
  
  for (const app of APPS) {
    const publicDir = path.join(ROOT, `apps/${app}/public`);
    
    console.log(`\nGenerating icons for ${app}...`);
    
    for (const icon of ICONS) {
      const outputPath = path.join(publicDir, icon.name);
      
      await sharp(sourceBuffer)
        .resize(icon.size, icon.size)
        .png()
        .toFile(outputPath);
      
      console.log(`  ✓ ${icon.name} (${icon.size}x${icon.size})`);
    }
    
    // Generate favicon.ico (32x32 PNG renamed, browsers accept PNG favicons)
    // For true ICO with multiple sizes, we'd need a separate tool
    const faviconPath = path.join(publicDir, 'favicon.ico');
    await sharp(sourceBuffer)
      .resize(32, 32)
      .png()
      .toFile(faviconPath);
    console.log(`  ✓ favicon.ico (32x32)`);
  }
  
  console.log('\n✅ All icons generated!');
}

generateIcons().catch(console.error);

