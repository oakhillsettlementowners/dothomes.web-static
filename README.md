# Oak Hill Settlement Homes

A modern monorepo for managing multiple subdomains for the Oak Hill Settlement homeowners association.

## 🏗️ Monorepo Structure

This project uses [Turborepo](https://turbo.build/repo) for efficient build orchestration and [pnpm](https://pnpm.io/) for fast package management.

```
oakhillsettlement.homes/
├── apps/
│   ├── owners/           # Main site (owners.oakhillsettlement.homes)
│   └── recall/           # Recall campaign subdomain (recall.oakhillsettlement.homes)
├── packages/
│   ├── ui/               # Shared UI components
│   └── config/           # Shared configuration
├── package.json          # Root workspace configuration
├── pnpm-workspace.yaml   # pnpm workspace configuration
└── turbo.json            # Turborepo pipeline configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm 9.0.0 or higher

### Installation

1. Install pnpm if you haven't already:
```bash
npm install -g pnpm@9.0.0
```

2. Install dependencies:
```bash
pnpm install
```

### Development

Run all apps in development mode:
```bash
pnpm dev
```

Run a specific app:
```bash
# Owners subdomain (main site)
cd apps/owners
pnpm dev
# Available at http://localhost:3000

# Recall subdomain (recall campaign site)
cd apps/recall
pnpm dev
# Available at http://localhost:3001
```

### Building for Production

Build all apps:
```bash
pnpm build
```

Build a specific app:
```bash
# Build owners site
cd apps/owners
pnpm build
# Static output: apps/owners/out/

# Build recall site
cd apps/recall
pnpm build
# Static output: apps/recall/out/
```

Each app builds to its own `out/` directory for independent deployment.

## 📦 Packages

### @oakhillsettlement/ui

Shared UI components library with reusable React components:
- `Button` - Flexible button component with variants and sizes
- `Card` - Card container component for content sections

### @oakhillsettlement/config

Shared configuration including site metadata and subdomain definitions.

## 🌐 Subdomains

### Owners (owners.oakhillsettlement.homes) - Main Site

The primary homeowners portal with community information, resources, and HOA board contact.

**Tech Stack:**
- Next.js 14 with App Router
- React 18
- TypeScript
- Tailwind CSS (Forest Green Theme)
- Static Export (SSG)
- Port: 3000

### Recall (recall.oakhillsettlement.homes) - Board Recall Campaign

Organizing platform for homeowners focused on board accountability and governance reform.

**Tech Stack:**
- Next.js 14 with App Router
- React 18
- TypeScript
- Tailwind CSS (Forest Green Theme)
- Static Export (SSG)
- Port: 3001

## 🔧 Adding a New Subdomain

1. Create a new Next.js app in `apps/`:
```bash
cd apps
npx create-next-app@latest your-subdomain --typescript --tailwind --app
```

2. Configure the app for static export in `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

3. Update the dev script in `apps/your-subdomain/package.json` to use a unique port:
```json
{
  "scripts": {
    "dev": "next dev -p 3002"
  }
}
```

4. Add the subdomain to `packages/config/index.ts`:
```typescript
export const siteConfig = {
  // ...
  subdomains: {
    owners: { /* ... */ },
    recall: { /* ... */ },
    'your-subdomain': {
      name: 'Your Subdomain Name',
      description: 'Description',
      url: 'https://your-subdomain.oakhillsettlement.homes',
      port: 3002, // Unique port for dev
    },
  },
};
```

## 🚢 Deployment

Each subdomain app can be deployed independently as a static site to separate destinations.

### Build Outputs

Each app generates its own static output:
- **owners**: `apps/owners/out/` → Deploy to `owners.oakhillsettlement.homes`
- **recall**: `apps/recall/out/` → Deploy to `recall.oakhillsettlement.homes`

### Option 1: Vercel (Recommended)

**For Owners Subdomain:**
1. Create new Vercel project
2. Configure build settings:
   - **Root Directory:** `apps/owners`
   - **Build Command:** `cd ../.. && pnpm turbo build --filter=owners`
   - **Output Directory:** `out`
3. Set custom domain: `owners.oakhillsettlement.homes`

**For Recall Subdomain:**
1. Create separate Vercel project
2. Configure build settings:
   - **Root Directory:** `apps/recall`
   - **Build Command:** `cd ../.. && pnpm turbo build --filter=recall`
   - **Output Directory:** `out`
3. Set custom domain: `recall.oakhillsettlement.homes`

### Option 2: Other Static Hosting

Build each site separately:
```bash
# Build owners site
cd apps/owners
pnpm build
# Upload apps/owners/out/ to owners subdomain hosting

# Build recall site
cd apps/recall
pnpm build
# Upload apps/recall/out/ to recall subdomain hosting
```

### Option 3: Single Server with Nginx

If hosting on a single server, use Nginx to route subdomains to different folders:

```nginx
# /etc/nginx/sites-available/oakhillsettlement.homes
server {
    server_name owners.oakhillsettlement.homes;
    root /var/www/owners;
    index index.html;
    
    location / {
        try_files $uri $uri/ $uri.html =404;
    }
}

server {
    server_name recall.oakhillsettlement.homes;
    root /var/www/recall;
    index index.html;
    
    location / {
        try_files $uri $uri/ $uri.html =404;
    }
}
```

Then upload:
- `apps/owners/out/` → `/var/www/owners/`
- `apps/recall/out/` → `/var/www/recall/`

### DNS Configuration

Add CNAME or A records for both subdomains:
```
owners.oakhillsettlement.homes → your-hosting-provider.com (or IP)
recall.oakhillsettlement.homes → your-hosting-provider.com (or IP)
```

## 🧹 Maintenance

Clean all build artifacts:
```bash
pnpm clean
```

Format code:
```bash
pnpm format
```

Lint all apps:
```bash
pnpm lint
```

## 📝 Scripts

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps for production
- `pnpm lint` - Lint all apps
- `pnpm clean` - Remove all build artifacts and dependencies
- `pnpm format` - Format all code with Prettier

## 🛠️ Tech Stack

- **Monorepo:** Turborepo
- **Package Manager:** pnpm
- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Static Export (SSG)

## 📄 License

Private - For Oak Hill Settlement Homeowners Association

## 🤝 Contributing

This is a private repository for Oak Hill Settlement homeowners. For questions or contributions, please contact the HOA board.

