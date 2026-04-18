# My Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, responsive design
- 🌙 Dark mode support
- 📱 Mobile-friendly
- 🎨 Smooth animations and transitions
- 📧 Contact form
- 📝 Blog section
- 🚀 Optimized for performance
- 📦 Deployed on Vercel

## Sections

- **Home**: Welcome section with CTA
- **About**: Bio and introduction
- **Skills**: Technical skills showcase
- **Projects**: Portfolio of work
- **Testimonials**: Client feedback
- **Blog**: Articles and insights
- **Contact**: Get in touch

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable React components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── context/        # React context (dark mode, etc)
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy

## Technologies Used

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Fast build tool
- **React Router**: Navigation
- **Tailwind CSS**: Styling
- **Lucide React**: Icons

## Customization

Update the following files with your information:

- `src/data/projects.ts` - Add your projects
- `src/data/skills.ts` - List your skills
- `src/data/testimonials.ts` - Add testimonials
- `src/components/About.tsx` - Your bio

## License

MIT
