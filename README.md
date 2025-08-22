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

### 🧩 Builder.io Integration
- **Visual CMS** - Content creation and editing without code changes
- **Builder DevTools** - Integrated Builder.io developer tools
- **Multi-model Support** - Support for various Builder.io content models

### 🌍 Developer Experience
- **Internationalization** - Built-in locale routing and content localization
- **State Management** - Zustand for simple, flexible state management
- **Clean Architecture** - Separation of concerns with clear project structure
- **Modern Dependencies** - Latest React and Next.js versions

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
NEXT_PUBLIC_BUILDER_API_KEY=YOUR_API_KEY_HERE # for builder content fetching
NEXT_PUBLIC_SITE_URL=http://localhost:3000/ # for seo
BUILDER_PRIVATE_KEY=YOUR_PRIVATE_KEY_HERE # for admin api (ex: get valid locales)
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
│   │   │   ├── [[...page]]/   # Non-localized catch-all route
│   │   │   │   ├── layout.tsx # Root layout template
│   │   │   │   └── page.tsx   # Content resolver for default locale
│   │   │   └── [locale]/      # Locale-specific routes
│   │   │       ├── [[...page]]/  # Localized catch-all route
│   │   │       │   └── page.tsx  # Content resolver with locale context
│   │   │       └── layout.tsx    # Localized layout template
│   │   ├── api/          # API routes
│   │   └── assets/       # CSS and other assets
│   ├── builder-registry.ts  # Builder.io registration
│   ├── components/       # Shared UI components
│   ├── hooks/            # Custom React hooks
│   ├── store/            # State management
│   └── utils/            # Utility functions
│       ├── builderUtils.ts  # Builder.io content fetching helpers
│       ├── localeUtils.ts   # Locale detection and validation
│       └── metadata.ts      # Shared metadata generation
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🔧 Builder.io Setup

1. Create an account on [Builder.io](https://builder.io)
2. Create a new space or use an existing one
3. Get your API key from Builder.io dashboard > Account Settings > API Keys
4. Set up the following environment variables in your `.env.local` file:

```
NEXT_PUBLIC_BUILDER_API_KEY=your-public-api-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000 # or your production URL
BUILDER_PRIVATE_KEY=your-private-key # needed for locale fetching from Admin API
```
5. Set up your content models in Builder.io
6. Connect your models with the template by adding them to the `builder-registry.ts` file

## 🎨 Customization

### Styling
Edit `src/app/assets/brand.css` to customize the global styles and design tokens.

### Components
Add new components in `src/components/` and register them with Builder.io in `src/builder-registry.ts`.

### Routing & Content Resolution

This template implements two main routing patterns:

1. **Default Catch-all Route** (`/[[...page]]`):
   - Handles the homepage (`/`) and non-localized content paths
   - Uses the default locale (automatically determined from Builder.io settings)
   - Falls back to the 404 page if content isn't found

2. **Localized Catch-all Route** (`/[locale]/[[...page]]`):
   - Handles all locale-specific content (e.g., `/en/about`, `/fr/contact`)
   - Validates the requested locale against Builder.io settings
   - Maintains the same URL structure within each locale

Both routes use Incremental Static Regeneration (ISR) with a 10-second revalidation period, which can be adjusted in the page files.

### Localization

Add or modify locales in the URL structure `/[locale]/...` where locale is a language code (e.g., 'en', 'fr'). The available locales are automatically fetched from your Builder.io settings through the Admin API.

### Metadata Generation

The template includes a shared metadata utility (`src/utils/metadata.ts`) that generates consistent SEO metadata for all pages:

- **Core functionality**: `generateSiteMetadata()` creates standardized metadata objects for Next.js pages
- **Localization support**: Automatically adapts titles, descriptions, and OpenGraph properties based on locale
- **Environment variables**: Uses `NEXT_PUBLIC_SITE_URL` for absolute URLs in metadata
- **Implementation**: Used in both default and localized layout files to avoid code duplication

To customize site-wide metadata, edit the `generateSiteMetadata` function in `src/utils/metadata.ts`.

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
