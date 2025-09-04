# HSHTG Marketing Firm Website

A comprehensive, modern marketing website built for HSHTG Marketing Firm, specializing in digital marketing services for local businesses near BMSIT, Bengaluru.

## 🚀 Quick Start

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd hshtg-website

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000 in your browser
\`\`\`

## 📋 System Requirements

### Required Software
- **Node.js**: Version 18.17 or later
- **pnpm**: Version 8.0 or later (recommended package manager)
- **Git**: For version control
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge

### Operating System Support
- Windows 10/11
- macOS 10.15 or later
- Linux (Ubuntu 18.04+, CentOS 7+, or equivalent)

## 🛠 Technology Stack

### Core Framework
- **Next.js 14.2.25** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe JavaScript development

### UI & Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **shadcn/ui** - Modern component library built on Radix UI
- **Framer Motion 12.23.12** - Animation and motion library
- **Lucide React** - Beautiful icon library
- **next-themes** - Dark/light mode support

### Form & Validation
- **React Hook Form 7.60.0** - Performant form library
- **Zod 3.25.67** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation resolvers

### Analytics & Performance
- **@vercel/analytics 1.3.1** - Website analytics
- **@vercel/speed-insights 1.2.0** - Performance monitoring

### Additional Libraries
- **date-fns** - Modern date utility library
- **recharts** - Composable charting library
- **cmdk** - Command palette component
- **sonner** - Toast notifications
- **vaul** - Drawer component
- **embla-carousel-react** - Carousel component
- **react-resizable-panels** - Resizable layouts

## 📦 Installation Guide

### 1. Install Node.js
Download and install Node.js from [nodejs.org](https://nodejs.org/)

### 2. Install pnpm
\`\`\`bash
npm install -g pnpm
\`\`\`

### 3. Clone and Setup Project
\`\`\`bash
# Clone the repository
git clone <repository-url>
cd hshtg-website

# Install all dependencies
pnpm install

# Verify installation
pnpm --version
node --version
\`\`\`

### 4. Environment Setup
Create a `.env.local` file in the root directory:
\`\`\`env
# Analytics (Optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id

# Contact Form (Optional - for production)
CONTACT_FORM_WEBHOOK_URL=your_webhook_url

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

## 🏃‍♂️ Development

### Available Scripts
\`\`\`bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run type checking
pnpm type-check

# Lint code
pnpm lint

# Format code
pnpm format
\`\`\`

### Development Server
- **Local**: http://localhost:3000
- **Network**: Your local IP address will be shown in terminal
- **Hot Reload**: Automatic page refresh on file changes

## 🏗 Build & Deployment

### Local Production Build
\`\`\`bash
# Build the application
pnpm build

# Start production server
pnpm start
\`\`\`

### Vercel Deployment (Recommended)
1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Vercel
3. Deploy automatically on push to main branch

### Manual Deployment
\`\`\`bash
# Build static files
pnpm build

# Upload 'out' folder to your hosting provider
\`\`\`

## 📁 Project Structure

\`\`\`
hshtg-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog and resources
│   ├── contact/           # Contact forms
│   ├── portfolio/         # Portfolio showcase
│   ├── services/          # Service pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Site navigation
│   ├── hero-section.tsx  # Homepage hero
│   └── ...               # Other components
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── images/          # Website images
│   ├── sitemap.xml      # SEO sitemap
│   └── robots.txt       # Search engine rules
├── package.json         # Dependencies and scripts
├── next.config.mjs      # Next.js configuration
├── tailwind.config.js   # Tailwind CSS config
└── tsconfig.json        # TypeScript config
\`\`\`

## 🎨 Customization

### Brand Colors
The website uses HSHTG's gold/bronze branding. Colors are defined in `app/globals.css`:
\`\`\`css
:root {
  --primary: 43 96% 56%;        /* Gold */
  --primary-foreground: 0 0% 9%; /* Dark text */
  --secondary: 30 41% 25%;       /* Bronze */
  /* ... other colors */
}
\`\`\`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Monospace**: JetBrains Mono

### Components
All UI components are built with shadcn/ui and can be customized in the `components/ui/` directory.

## 🔧 Configuration Files

### next.config.mjs
- Image optimization settings
- Build output configuration
- Performance optimizations

### tailwind.config.js
- Custom color palette
- Typography settings
- Animation configurations

### tsconfig.json
- TypeScript compiler options
- Path aliases for imports
- Strict type checking

## 📱 Features

### SEO Optimization
- Meta tags and Open Graph
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt
- Performance optimization

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- High contrast ratios

### Performance
- Image optimization
- Code splitting
- Lazy loading
- Service worker caching

### Mobile Responsive
- Mobile-first design
- Touch-friendly interactions
- Progressive Web App features

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use:**
\`\`\`bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
pnpm dev -- --port 3001
\`\`\`

**Module not found errors:**
\`\`\`bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
\`\`\`

**Build errors:**
\`\`\`bash
# Check TypeScript errors
pnpm type-check

# Clear Next.js cache
rm -rf .next
pnpm build
\`\`\`

### Performance Issues
- Ensure images are optimized (WebP format recommended)
- Check bundle size with `pnpm analyze`
- Monitor Core Web Vitals in production

## 📞 Support

For technical support or questions about the HSHTG website:

- **Email**: tech@hshtg.com
- **Phone**: +91 XXXXX XXXXX
- **Location**: Near BMSIT, Bengaluru

## 📄 License

This project is proprietary software owned by HSHTG Marketing Firm. All rights reserved.

---

**Built with ❤️ for local businesses in Bengaluru**
