# Coaching Website

A modern coaching website built with Astro, React, Framer Motion, and Tailwind CSS.

## 🚀 Project Structure

coaching-website/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── BaseHead.astro
│   │   │   └── Navigation.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Introduction.astro
│   │   │   ├── Services.astro
│   │   │   └── TestimonialSlider.tsx
│   │   ├── shared/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.astro
│   │   │   ├── ContactForm.tsx
│   │   │   └── NewsletterForm.tsx
│   │   └── animations/
│   │       ├── FadeIn.tsx
│   │       ├── SlideIn.tsx
│   │       └── PageTransition.tsx
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── BlogPost.astro
│   │   └── MarkdownLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── testimonials.astro
│   │   ├── contact.astro
│   │   ├── privacy-policy.astro
│   │   ├── terms-of-service.astro
│   │   ├── free-resources.astro
│   │   ├── webinars.astro
│   │   └── affiliate-program.astro
│   ├── content/
│   │   ├── blog/
│   │   │   └── posts/
│   │   └── testimonials/
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       ├── animations.ts
│       └── helpers.ts
├── public/
│   ├── fonts/
│   └── images/
├── astro.config.mjs
├── tailwind.config.cjs
├── tsconfig.json
└── package.json

```plaintext

## 🧞 Key Features

- **Astro Pages**: Static pages with optimal performance
- **React Components**: Interactive elements with smooth animations
- **Framer Motion**: Page transitions and scroll animations
- **Tailwind CSS**: Utility-first styling with custom theme
- **TypeScript**: Type-safe development
- **Content Collections**: Blog posts and testimonials management
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags and structured data
- **Performance Focused**: Minimal JavaScript, optimal loading

## 🎨 Color Palette

```css
:root {
  --color-primary: #FF9F8C;    /* Soft Coral Orange */
  --color-secondary: #A8E6CF;  /* Fresh Mint Green */
  --color-accent: #FFD3E1;     /* Gentle Pink */
  --color-background: #FFF8F5; /* Light Cream */
  --color-text: #2D3436;       /* Dark Text */
}
```

## 📦 Dependencies

- astro
- @astrojs/react
- @astrojs/tailwind
- react
- react-dom
- framer-motion
- tailwindcss
- typescript


## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`


## 📝 Content Management

- Blog posts are written in Markdown and stored in `src/content/blog/posts`
- Testimonials are managed in `src/content/testimonials`
- Images and other assets are stored in `public`


## 🎯 Development Guidelines

- Use Astro components for static content
- Use React components for interactive elements
- Implement Framer Motion for animations
- Follow Tailwind CSS class naming conventions
- Maintain TypeScript type safety
- Optimize images and assets
- Follow accessibility best practices


## 📱 Responsive Design

The website is built with a mobile-first approach and includes breakpoints for:

- Mobile: 0-640px
- Tablet: 641-1024px
- Desktop: 1025px+


## 🔒 Security

- Form validation and sanitization
- Protected API endpoints
- Secure contact form submission
- Privacy policy compliance
- GDPR considerations