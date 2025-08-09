# Next.js + Builder.io Boilerplate

A production-ready, scalable starter template for building modern web applications using Next.js App Router and Builder.io.

[![Builder.io Preview](https://img.shields.io/badge/Builder.io-Preview-blue)](https://www.builder.my/p/bfb8730a5a174f32b5165569a8d49fad/ce319b31885b472686ba84455c865cde)
[![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue)](https://reactjs.org/)

## ✨ Features

### 🚀 Performance & Architecture
- **Next.js 15 App Router** - Server components, nested layouts, and route groups
- **Optimized Build** - CSS optimization with Beasties, bundle analysis, and image optimization
- **TypeScript** - Full type safety throughout the project
- **Production-ready** - Proper caching strategies and error handling

### 🧩 Builder.io Integration
- **Visual CMS** - Content creation and editing without code changes
- **Intelligent Caching** - Content-type aware caching strategies
- **Builder DevTools** - Integrated Builder.io developer tools
- **Multi-model Support** - Support for various Builder.io content models

### 🌍 Developer Experience
- **Internationalization** - Built-in locale routing and content localization
- **State Management** - Zustand for simple, flexible state management
- **Clean Architecture** - Separation of concerns with clear project structure
- **Modern Dependencies** - Latest React and Next.js versions

## 🔍 Demo & Examples

Check out our example implementation:
[Builder.io Template Example](https://www.builder.my/p/bfb8730a5a174f32b5165569a8d49fad/ce319b31885b472686ba84455c865cde)

## 🚦 Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nextjs-builder-template.git
cd nextjs-builder-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file based on `.env.example` and add your Builder.io API key:
```
NEXT_PUBLIC_BUILDER_API_KEY=YOUR_API_KEY_HERE
NEXT_PUBLIC_SITE_URL=http://localhost:3000/
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
nextjs-builder-template/
├── public/               # Static assets
├── src/
│   ├── actions/          # Server actions
│   ├── app/              # App Router routes
│   │   ├── (Pages)/      # Main page routes
│   │   │   ├── [locale]/ # Locale-specific routes
│   │   ├── api/          # API routes
│   │   ├── assets/       # CSS and other assets
│   ├── builder-registry.ts  # Builder.io registration
│   ├── components/       # Shared UI components
│   ├── hooks/            # Custom React hooks
│   ├── store/            # State management
│   └── utils/            # Utility functions
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🔧 Builder.io Setup

1. Create an account on [Builder.io](https://builder.io)
2. Create a new space or use an existing one
3. Get your API key from Builder.io dashboard > Account Settings > API Keys
4. Set up your content models in Builder.io
5. Connect your models with the template by adding them to the `builder-registry.ts` file

## 🎨 Customization

### Styling
Edit `src/app/assets/brand.css` to customize the global styles and design tokens.

### Components
Add new components in `src/components/` and register them with Builder.io in `src/builder-registry.ts`.

### Localization
Add or modify locales in the URL structure `/[locale]/...` where locale is a language-region code (e.g., 'en').

## 🚀 Deployment

This template is optimized for deployment on Vercel, Netlify, or any other Next.js-compatible platform.

```bash
npm run build
# or
yarn build
```

## 📚 Documentation

For more detailed documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [Builder.io Documentation](https://www.builder.io/c/docs/intro)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
