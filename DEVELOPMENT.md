# HSHTG Website Development Guide

## 🛠 Development Environment Setup

### Prerequisites Checklist
- [ ] Node.js 18.17+ installed
- [ ] pnpm package manager installed
- [ ] Git configured with your credentials
- [ ] Code editor (VS Code recommended)
- [ ] Modern web browser with dev tools

### Recommended VS Code Extensions
\`\`\`json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
\`\`\`

## 🏗 Project Architecture

### File Structure Explained
\`\`\`
hshtg-website/
├── app/                    # Next.js 14 App Router
│   ├── (routes)/          # Route groups
│   ├── api/               # API routes
│   ├── globals.css        # Global styles + CSS variables
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui base components
│   ├── sections/         # Page sections
│   └── forms/            # Form components
├── lib/                  # Utility functions
│   ├── utils.ts          # General utilities
│   ├── validations.ts    # Zod schemas
│   └── constants.ts      # App constants
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── public/               # Static assets
\`\`\`

### Design System

#### Color Palette
\`\`\`css
/* Primary Colors - HSHTG Gold/Bronze Branding */
--primary: 43 96% 56%;           /* Gold #F4D03F */
--primary-foreground: 0 0% 9%;   /* Dark text */
--secondary: 30 41% 25%;         /* Bronze #8B4513 */
--accent: 45 93% 47%;            /* Bright gold */

/* Neutral Colors */
--background: 0 0% 100%;         /* White */
--foreground: 240 10% 3.9%;     /* Near black */
--muted: 240 4.8% 95.9%;        /* Light gray */
--border: 240 5.9% 90%;         /* Border gray */
\`\`\`

#### Typography Scale
\`\`\`css
/* Font Families */
--font-sans: 'Inter', sans-serif;           /* Body text */
--font-serif: 'Playfair Display', serif;    /* Headings */
--font-mono: 'JetBrains Mono', monospace;   /* Code */

/* Font Sizes */
text-xs: 0.75rem;    /* 12px */
text-sm: 0.875rem;   /* 14px */
text-base: 1rem;     /* 16px */
text-lg: 1.125rem;   /* 18px */
text-xl: 1.25rem;    /* 20px */
text-2xl: 1.5rem;    /* 24px */
text-3xl: 1.875rem;  /* 30px */
text-4xl: 2.25rem;   /* 36px */
\`\`\`

## 🧩 Component Development

### Component Structure
\`\`\`tsx
// components/example-component.tsx
'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ExampleComponentProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export function ExampleComponent({ 
  title, 
  description, 
  className,
  children 
}: ExampleComponentProps) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={cn(
      "rounded-lg border bg-card p-6",
      isActive && "border-primary",
      className
    )}>
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground mt-2">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
\`\`\`

### Form Components with Validation
\`\`\`tsx
// components/forms/contact-form.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    // Handle form submission
    console.log('[v0] Form submitted:', data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {/* Form fields */}
    </form>
  )
}
\`\`\`

## 🎨 Styling Guidelines

### Tailwind CSS Best Practices
\`\`\`tsx
// ✅ Good - Semantic classes, consistent spacing
<div className="flex items-center justify-between p-6 bg-card rounded-lg border">
  <h2 className="text-xl font-semibold text-foreground">Title</h2>
  <Button variant="outline" size="sm">Action</Button>
</div>

// ❌ Avoid - Arbitrary values, inconsistent spacing
<div className="flex items-center justify-between p-[23px] bg-[#f8f9fa] rounded-[12px] border-[1px]">
  <h2 className="text-[19px] font-[600] text-[#1a1a1a]">Title</h2>
</div>
\`\`\`

### Responsive Design Patterns
\`\`\`tsx
// Mobile-first responsive design
<div className="
  grid grid-cols-1           // Mobile: 1 column
  md:grid-cols-2            // Tablet: 2 columns  
  lg:grid-cols-3            // Desktop: 3 columns
  gap-4 md:gap-6 lg:gap-8   // Responsive gaps
">
  {items.map(item => (
    <Card key={item.id} className="
      p-4 md:p-6              // Responsive padding
      text-sm md:text-base    // Responsive text size
    ">
      {item.content}
    </Card>
  ))}
</div>
\`\`\`

## 🔧 Development Workflow

### Git Workflow
\`\`\`bash
# Feature development
git checkout -b feature/new-component
git add .
git commit -m "feat: add new component with animations"
git push origin feature/new-component

# Create pull request, review, merge
git checkout main
git pull origin main
git branch -d feature/new-component
\`\`\`

### Commit Message Convention
\`\`\`
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting, missing semicolons, etc.
refactor: code refactoring
test: adding tests
chore: maintenance tasks
\`\`\`

### Code Quality Tools

#### ESLint Configuration
\`\`\`json
// .eslintrc.json
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended"
  ],
  "rules": {
    "prefer-const": "error",
    "no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
\`\`\`

#### Prettier Configuration
\`\`\`json
// .prettierrc
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 80
}
\`\`\`

## 🧪 Testing Strategy

### Component Testing with Jest
\`\`\`tsx
// __tests__/components/button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
\`\`\`

### E2E Testing with Playwright
\`\`\`typescript
// tests/homepage.spec.ts
import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/')
  
  // Check hero section
  await expect(page.locator('h1')).toContainText('Transform Your Business')
  
  // Check navigation
  await expect(page.locator('nav')).toBeVisible()
  
  // Test contact form
  await page.click('text=Get Started')
  await page.fill('[name="email"]', 'test@example.com')
  await page.click('button[type="submit"]')
})
\`\`\`

## 📊 Performance Optimization

### Image Optimization
\`\`\`tsx
import Image from 'next/image'

// ✅ Optimized images
<Image
  src="/hero-image.jpg"
  alt="HSHTG Marketing Services"
  width={1200}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
\`\`\`

### Code Splitting
\`\`\`tsx
import dynamic from 'next/dynamic'

// Lazy load heavy components
const HeavyChart = dynamic(() => import('./heavy-chart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false // Client-side only if needed
})
\`\`\`

### Bundle Analysis
\`\`\`bash
# Analyze bundle size
pnpm build
pnpm analyze

# Check for unused dependencies
npx depcheck
\`\`\`

## 🐛 Debugging

### Development Debugging
\`\`\`tsx
// Use console.log with [v0] prefix for debugging
console.log('[v0] Component rendered with props:', props)
console.log('[v0] Form validation errors:', errors)
console.log('[v0] API response:', response)

// React DevTools
// Install React Developer Tools browser extension
\`\`\`

### Production Debugging
\`\`\`tsx
// Error boundaries for production
'use client'

import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="text-center p-8">
      <h2>Something went wrong:</h2>
      <pre className="text-red-500">{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export function MyApp() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  )
}
\`\`\`

## 📱 Mobile Development

### Touch Interactions
\`\`\`tsx
// Touch-friendly button sizes (minimum 44px)
<Button className="min-h-[44px] min-w-[44px] touch-manipulation">
  Tap me
</Button>

// Prevent zoom on input focus (iOS)
<input 
  className="text-base" // 16px minimum to prevent zoom
  type="email"
/>
\`\`\`

### Progressive Web App Features
\`\`\`typescript
// public/sw.js - Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('hshtg-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/about',
        '/services',
        '/contact',
        '/offline.html'
      ])
    })
  )
})
\`\`\`

## 🔍 SEO Development

### Meta Tags Template
\`\`\`tsx
// app/layout.tsx or page-specific metadata
export const metadata = {
  title: 'HSHTG Marketing Firm | Digital Marketing Bengaluru',
  description: 'Professional digital marketing services for businesses near BMSIT, Bengaluru. Social media, branding, events & creative design.',
  keywords: 'digital marketing, Bengaluru, BMSIT, social media, branding',
  openGraph: {
    title: 'HSHTG Marketing Firm',
    description: 'Transform your business with expert digital marketing',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HSHTG Marketing Firm',
    description: 'Digital marketing experts in Bengaluru',
  }
}
\`\`\`

### Structured Data
\`\`\`tsx
// components/structured-data.tsx
export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HSHTG Marketing Firm',
    description: 'Digital marketing and branding services',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN'
    },
    telephone: '+91-XXXXX-XXXXX',
    url: 'https://hshtg.com'
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
\`\`\`

---

**Happy coding! 🚀**
