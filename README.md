# Context7 MCP Next.js Integration

A modern Next.js application integrated with [Context7 MCP](https://www.upstash.com/) (Model Context Protocol) for AI-powered documentation and code reference capabilities.

## Features

- ✨ **Context7 MCP Integration** - Connect to Context7 for intelligent documentation search and code examples
- 🎨 **Beautiful UI** - Tailwind CSS for responsive, modern design
- ⚡ **Next.js 16** - Latest Next.js with App Router and TypeScript
- 🔧 **Environment Configuration** - Easy setup with environment variables

## Getting Started

### Prerequisites
- Node.js 18+ 
- Context7 API Key (from your MCP configuration)

### Installation

1. Clone and install dependencies:
```bash
npm install
```

2. Configure environment variables by copying the example file:
```bash
cp .env.local.example .env.local
```

3. Add your Context7 API key to `.env.local`:
```
CONTEXT7_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the welcome page.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Home page with Context7 welcome
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/         # React components
│   └── WelcomeSection.tsx  # Welcome component with Context7 status
├── config/            # Configuration files
│   └── context7.config.ts  # Context7 configuration
└── lib/               # Utility functions
    └── context7.ts    # Context7 integration utilities
```

## Usage

### Using Context7 Utilities

```typescript
import { getWelcomeMessage, getContext7Status } from '@/lib/context7';

// Get welcome message
const message = await getWelcomeMessage();

// Check Context7 status
const status = await getContext7Status();
```

### Environment Configuration

Edit `src/config/context7.config.ts` to customize Context7 settings:

```typescript
export const context7Config = {
  enabled: true,
  apiKey: process.env.CONTEXT7_API_KEY || '',
  server: {
    baseUrl: process.env.CONTEXT7_SERVER_URL || 'http://localhost:8000',
    timeout: 30000,
  },
};
```

## Build for Production

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Context7 Documentation](https://docs.upstash.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
