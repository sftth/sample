## Context7 MCP Next.js Project - Setup Guide

### Project Overview
This is a modern Next.js application integrated with Context7 MCP for AI-powered documentation and code reference capabilities. The application displays a beautiful welcome interface with Context7 status information.

### Quick Start

1. **Environment Setup**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Add your Context7 API Key**
   Edit `.env.local` and add:
   ```
   CONTEXT7_API_KEY=your_actual_api_key
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 to see the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### File Structure

Key files for Context7 integration:
- `src/lib/context7.ts` - Context7 utility functions
- `src/config/context7.config.ts` - Configuration management
- `src/components/WelcomeSection.tsx` - Welcome component showing Context7 status
- `src/app/page.tsx` - Home page

### Customization

### Adding Context7 Features

1. **Documentation Search** - Use `getWelcomeMessage()` from `src/lib/context7.ts`
2. **Status Check** - Use `getContext7Status()` to verify connection
3. **Configuration** - Modify `src/config/context7.config.ts`

### Environment Variables

- `CONTEXT7_API_KEY` - Your Context7 MCP API key (required)
- `CONTEXT7_SERVER_URL` - Custom Context7 server URL (optional, defaults to localhost:8000)
- `NEXT_PUBLIC_CONTEXT7_ENABLED` - Enable/disable Context7 (default: true)

### Deployment

To deploy to production:

1. Build the project: `npm run build`
2. Set environment variables on your hosting platform
3. Start the server: `npm start`

Supported platforms:
- Vercel (recommended for Next.js)
- AWS, Google Cloud, Azure, etc.

### Troubleshooting

**Issue**: Context7 shows as disconnected
- Ensure `CONTEXT7_API_KEY` is set in `.env.local`
- Check that the API key is valid

**Issue**: Port 3000 already in use
- Run: `npm run dev -- -p 3001`

**Issue**: Build errors
- Clear cache: `rm -rf .next`
- Reinstall dependencies: `npm install`

### Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
