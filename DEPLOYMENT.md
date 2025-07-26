# Deployment Guide

## Cloudflare Pages Deployment

### Step 1: Prepare Your Repository
1. Push your portfolio code to GitHub
2. Ensure all files are committed and pushed

### Step 2: Connect to Cloudflare Pages
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to "Pages" section
3. Click "Create a project"
4. Select "Connect to Git"
5. Choose your GitHub repository

### Step 3: Configure Build Settings
Use these exact settings:

**Framework preset**: Next.js (Static HTML Export)
**Build command**: `npm run build`
**Build output directory**: `out`
**Root directory**: `/` (leave empty if repo root)

**Environment Variables**: None required

### Step 4: Deploy
1. Click "Save and Deploy"
2. Wait for build to complete (~2-3 minutes)
3. Your portfolio will be live at `https://your-project.pages.dev`

### Step 5: Custom Domain (Optional)
1. Go to your project's "Custom domains" tab
2. Click "Set up a custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions

## Alternative Deployment Methods

### Using Wrangler CLI
```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy
wrangler pages publish out
```

### Manual Upload
1. Build the project: `npm run build`
2. Go to Cloudflare Pages dashboard
3. Click "Upload assets"
4. Upload the entire `out` folder

## Testing Before Deployment

### Local Testing with Production Build
```bash
npm run build
npm run start
```

### Testing Static Export
```bash
npm run build
npx http-server out
```

### Testing with Wrangler (Most Accurate)
```bash
npm run build
wrangler pages dev out
```

## Troubleshooting

### Build Fails
- Check Node.js version (18+ required)
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`

### Images Not Loading
- Ensure images are in `public/images/` directory
- Check image paths in components
- Verify image formats are web-compatible

### Styles Not Applied
- Check Tailwind CSS configuration
- Verify PostCSS setup
- Clear `.next` cache: `rm -rf .next`

### Animation Issues
- Check Framer Motion version compatibility
- Verify animation props in components
- Test in different browsers

## Performance Optimization

### Pre-deployment Checklist
- [ ] Run `npm run build` successfully
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check image optimization
- [ ] Test form submissions
- [ ] Validate SEO meta tags

### Post-deployment
- [ ] Test live URL in multiple browsers
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Verify analytics (if added)

## Maintenance

### Regular Updates
1. Update dependencies monthly
2. Check for security vulnerabilities
3. Update content as needed
4. Monitor performance metrics

### Content Updates
- Personal information: Update in respective components
- Projects: Modify `components/Projects.tsx`
- Skills: Update `components/Skills.tsx`
- Architecture diagrams: Replace in `public/images/`

## Support

If you encounter issues:
1. Check the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/)
2. Review build logs for specific errors
3. Test locally before deploying
4. Contact: dpk.srm.fbg@gmail.com
