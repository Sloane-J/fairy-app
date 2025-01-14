# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


# Lifestyle Coach & Digital Marketing Tutor Website

A modern website built with Astro and Tailwind CSS for a lifestyle coach and digital marketing tutor.

## Core Features

- 🚀 Built with Astro + Tailwind CSS
- 📱 Fully responsive design
- 🎯 SEO optimized
- 📝 Blog functionality
- 📬 Contact form integration
- 🔄 Reusable components
- 📊 Services showcase
- 💬 Testimonials system
- ❓ FAQ sections
- 📱 WhatsApp integration for classes

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── global/
│   │   │   ├── Navbar.astro
│   │   │   ├── Footer.astro
│   │   │   └── CTAButton.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── HowItWorks.astro
│   │   │   ├── Features.astro
│   │   │   └── BlogList.astro
│   │   ├── about/
│   │   │   ├── Timeline.astro
│   │   │   └── Team.astro
│   │   ├── services/
│   │   │   ├── ServiceCard.astro
│   │   │   └── PricingTable.astro
│   │   ├── blog/
│   │   │   ├── BlogCard.astro
│   │   │   └── BlogSidebar.astro
│   │   └── shared/
│   │       ├── Testimonials.astro
│   │       ├── FAQ.astro
│   │       └── ContactForm.astro
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── BlogLayout.astro
│   │   └── ServiceLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services/
│   │   │   ├── index.astro
│   │   │   ├── digital-marketing-tutoring.astro
│   │   │   └── lifestyle-coaching.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── contact.astro
│   ├── content/
│   │   ├── blog/
│   │   │   └── posts/
│   │   └── testimonials/
│   └── styles/
│       └── global.css
├── public/
│   ├── images/
│   └── fonts/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Key Files and Their Purposes

### Layouts
- `Layout.astro`: Main layout with common elements (navbar, footer)
- `BlogLayout.astro`: Specific layout for blog posts
- `ServiceLayout.astro`: Layout for service pages

### Pages
- `index.astro`: Homepage with hero section, features, and recent blog posts
- `about.astro`: About page with timeline and team information
- `services/index.astro`: Overview of all services
- `services/digital-marketing-tutoring.astro`: Digital marketing service details
- `services/lifestyle-coaching.astro`: Lifestyle coaching service details
- `blog/index.astro`: Blog listing page
- `blog/[...slug].astro`: Dynamic blog post pages
- `contact.astro`: Contact page with form

### Components
- Global components used across multiple pages
- Page-specific components organized by feature
- Shared components like testimonials and FAQ sections

## Setup Instructions

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Deploy to Vercel
```bash
vercel
```

## Development Guidelines

- Follow Astro's file-based routing convention
- Use Tailwind CSS for styling
- Keep components modular and reusable
- Implement responsive design patterns
- Optimize images and assets
- Follow SEO best practices

## Deployment

The site is deployed on Vercel. Deployment happens automatically when changes are pushed to the main branch.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PUBLIC_SITE_URL=your-site-url
PUBLIC_CONTACT_EMAIL=your-email
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

[Choose appropriate license]