# Deepak Sharma - Senior Data Engineer Portfolio

A modern, interactive technical portfolio showcasing 7+ years of AWS data engineering expertise, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Interactive Architecture Diagrams**: Professional AWS architecture diagrams with hover effects
- **Dynamic Project Showcase**: Collapsible project cards with detailed technical information  
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Production Ready**: Configured for Cloudflare Pages deployment

## 🛠️ Technologies

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React and Heroicons
- **Deployment**: Cloudflare Pages ready with static export

## 📂 Project Structure

```
deepak-sharma-portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind setup
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── About.tsx            # About section with highlights
│   ├── Contact.tsx          # Contact form and information
│   ├── Hero.tsx             # Hero section with animation
│   ├── Navbar.tsx           # Navigation with mobile menu
│   ├── Projects.tsx         # Interactive project showcase
│   └── Skills.tsx           # Skills visualization
├── public/
│   └── images/              # Architecture diagrams and assets
├── package.json             # Dependencies and scripts
├── next.config.js           # Next.js configuration for static export
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md               # This file
```

## 🏗️ Featured Projects

### 1. Real-Time Data Pipeline & Lakehouse
- **Technologies**: AWS Kinesis, Lambda, Spark, Iceberg, Athena
- **Impact**: Reduced data processing latency by 85%
- **Scale**: Processing terabytes of airline operational data daily

### 2. Event-Driven Distributed System  
- **Technologies**: Apache Kafka, EventBridge, Step Functions, Lambda
- **Impact**: Improved notification delivery by 90%, 99.9% uptime
- **Scale**: Serving millions of airline customers

### 3. Serverless Microservices & REST APIs
- **Technologies**: API Gateway, FastAPI, Lambda, DynamoDB
- **Impact**: 60% faster API response, 40% cost reduction
- **Architecture**: Fault-tolerant, auto-scaling design

### 4. Infrastructure as Code & CI/CD
- **Technologies**: AWS CDK, GitLab CI/CD, CloudFormation
- **Impact**: 300% deployment frequency increase, 85% fewer failures
- **Features**: Zero-downtime deployments, automated testing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd deepak-sharma-portfolio
npm install
```

2. **Run development server**:
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to see the portfolio.

3. **Build for production**:
```bash
npm run build
```

4. **Test production build locally**:
```bash
npm run start
```

## 🌐 Deployment to Cloudflare Pages

### Method 1: Git Integration (Recommended)
1. Push your code to GitHub
2. Connect repository to Cloudflare Pages
3. Use these build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js version**: 18

### Method 2: Direct Upload
1. Build the project: `npm run build`
2. Upload the `out` folder to Cloudflare Pages

### Environment Variables
No environment variables required for basic deployment.

## 🎨 Customization

### Personal Information
Update personal details in `components/Hero.tsx` and `components/Contact.tsx`:

```typescript
// In Hero.tsx
const personalInfo = {
  name: "Your Name",
  title: "Your Title", 
  location: "Your Location",
  email: "your.email@domain.com",
  phone: "+1234567890"
}
```

### Projects
Modify the projects array in `components/Projects.tsx`:

```typescript
const projects = [
  {
    id: 'your-project',
    title: 'Your Project Title',
    company: 'Your Company',
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2'],
    // ... other fields
  }
]
```

### Skills
Update skill categories in `components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: 'Your Skill Category',
    skills: ['Skill1', 'Skill2', 'Skill3'],
    color: 'bg-blue-500'
  }
]
```

### Architecture Diagrams
Replace images in `public/images/` directory:
- `data_pipeline_architecture.png`
- `architecture_diagram.png` 
- `microservices_architecture.png`

## 🧪 Testing Locally

### Development Testing
```bash
npm run dev
```

### Production Build Testing
```bash
npm run build
npm run start
```

### Static Export Testing
```bash
npm run build
npx http-server out
```

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly interactions
- Optimized typography and spacing
- Collapsible mobile navigation

## ⚡ Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for speed
- **Bundle Size**: Minimal dependencies
- **Images**: Optimized and lazy-loaded

## 🔧 Maintenance

### Adding New Projects
1. Add project data to `components/Projects.tsx`
2. Include architecture diagram in `public/images/`
3. Update categories if needed

### Updating Dependencies
```bash
npm update
npm audit fix
```

### Content Updates
Most content can be updated by modifying the respective component files without changing the overall structure.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

For questions or support:
- Email: dpk.srm.fbg@gmail.com
- Phone: +91 9713432167

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
