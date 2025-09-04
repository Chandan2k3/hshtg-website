# HSHTG Website Deployment Guide

## 🚀 Deployment Options

### 1. Vercel (Recommended)

Vercel provides the best experience for Next.js applications with automatic deployments, edge functions, and global CDN.

#### Setup Steps:
1. **Connect Repository**
   \`\`\`bash
   # Push your code to GitHub
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project settings:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `pnpm build`
     - Output Directory: `.next`

3. **Environment Variables**
   Add these in Vercel dashboard:
   \`\`\`env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
   \`\`\`

4. **Custom Domain**
   - Add your domain in Vercel dashboard
   - Update DNS records as instructed
   - SSL certificate is automatically provisioned

### 2. Netlify

#### Setup Steps:
1. **Build Settings**
   - Build command: `pnpm build && pnpm export`
   - Publish directory: `out`

2. **netlify.toml Configuration**
   \`\`\`toml
   [build]
     command = "pnpm build"
     publish = ".next"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   \`\`\`

### 3. Traditional Hosting (cPanel/Shared Hosting)

#### Requirements:
- Node.js support (version 18+)
- SSH access
- At least 1GB RAM

#### Steps:
1. **Build Static Version**
   \`\`\`bash
   # Add to next.config.mjs
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   # Build
   pnpm build
   \`\`\`

2. **Upload Files**
   - Upload contents of `out` folder to public_html
   - Ensure .htaccess is configured for SPA routing

### 4. VPS/Dedicated Server

#### Requirements:
- Ubuntu 20.04+ or CentOS 8+
- 2GB RAM minimum
- Node.js 18+
- Nginx or Apache
- PM2 for process management

#### Setup Steps:
1. **Server Setup**
   \`\`\`bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install pnpm
   npm install -g pnpm
   
   # Install PM2
   npm install -g pm2
   \`\`\`

2. **Deploy Application**
   \`\`\`bash
   # Clone repository
   git clone <your-repo-url> /var/www/hshtg-website
   cd /var/www/hshtg-website
   
   # Install dependencies
   pnpm install
   
   # Build application
   pnpm build
   
   # Start with PM2
   pm2 start npm --name "hshtg-website" -- start
   pm2 save
   pm2 startup
   \`\`\`

3. **Nginx Configuration**
   \`\`\`nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   \`\`\`

## 🔧 Environment Configuration

### Production Environment Variables
\`\`\`env
# Required
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NODE_ENV=production

# Analytics (Optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id

# Contact Forms (Optional)
CONTACT_FORM_WEBHOOK_URL=your_webhook_url
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# Database (If using)
DATABASE_URL=your_database_connection_string

# Security
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=https://your-domain.com
\`\`\`

### Build Optimization
\`\`\`javascript
// next.config.mjs
const nextConfig = {
  // Enable compression
  compress: true,
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  // Enable experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'date-fns'],
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
\`\`\`

## 📊 Performance Monitoring

### Core Web Vitals
Monitor these metrics in production:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Tools for Monitoring:
- Google PageSpeed Insights
- Vercel Analytics
- Google Search Console
- Lighthouse CI

## 🔒 Security Checklist

### Pre-Deployment Security:
- [ ] Remove all console.log statements
- [ ] Validate all environment variables
- [ ] Enable HTTPS/SSL
- [ ] Configure security headers
- [ ] Set up rate limiting
- [ ] Validate all user inputs
- [ ] Enable CSRF protection

### Post-Deployment:
- [ ] Test all contact forms
- [ ] Verify analytics tracking
- [ ] Check mobile responsiveness
- [ ] Test page load speeds
- [ ] Validate SEO meta tags
- [ ] Test accessibility features

## 🚨 Rollback Procedure

### Vercel Rollback:
1. Go to Vercel dashboard
2. Select your project
3. Click on "Deployments"
4. Find previous working deployment
5. Click "Promote to Production"

### Manual Rollback:
\`\`\`bash
# Revert to previous commit
git log --oneline
git revert <commit-hash>
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force origin main
\`\`\`

## 📞 Support & Maintenance

### Regular Maintenance Tasks:
- Update dependencies monthly
- Monitor performance metrics
- Backup database (if applicable)
- Review security logs
- Update content and images

### Emergency Contacts:
- **Technical Lead**: tech@hshtg.com
- **Hosting Support**: Your hosting provider
- **Domain Registrar**: Your domain provider

---

**Deployment completed successfully! 🎉**
