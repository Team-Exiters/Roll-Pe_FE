# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Roll-Pe (롤페) is an online rolling paper community service built with Next.js 14. Users can create collaborative "rollpe" (rolling papers) where multiple participants can contribute "hearts" (messages/notes) for a specific recipient.

**Key Concepts:**
- **Rollpe**: A canvas/paper where users write messages (like a digital bulletin board)
- **Heart (마음)**: Individual message/note posted on a rollpe (like a post-it note)

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint the codebase
npm run lint
```

## Architecture

### Next.js App Router Structure

The project uses Next.js 14 App Router with **route groups** for layout management:

- `(layout_B)` - Pages with back button header (e.g., sign-in, sign-up, OAuth)
- `(layout_BL)` - Pages with back button and custom layout
- `(layout_H)` - Pages with header only
- `(layout_HF)` - Pages with header and footer (e.g., main, mypage)
- `(layout_F)` - Pages with footer only
- `(layout_X)` - Pages with no layout
- `(layout_BLH)` - Pages with back, custom layout, and header
- `(bigRollpeRouter)` - Special routing for full rollpe view

Each route group has its own `layout.tsx` that applies specific UI patterns.

### State Management

**Redux Toolkit + Redux Persist:**
- User authentication state persisted across sessions
- Store located at `public/redux/store.ts`
- User slice: `public/redux/slices/userSlice.ts` (stores id, name, email, identifyCode, provider)
- Only `simpleUser` slice is persisted (whitelist configuration)
- Root layout wraps app with `<ReduxProvider>` for global access

### API Layer

**Axios with Interceptors:**
- `axiosInstance` - For public endpoints (no auth)
- `axiosInstanceAuth` - For authenticated endpoints with automatic token refresh
- Base URL: `process.env.NEXT_PUBLIC_API_URL` (proxied via `/api/*` rewrites)
- Access/refresh tokens stored in httpOnly cookies
- Automatic token refresh on 401 responses
- All API functions located in `public/utils/apis/`

**Server Actions:**
All API calls are Next.js server actions (`"use server"`) to keep auth tokens secure on the server.

### Styling System

**styled-components with SSR:**
- Global colors defined in `public/styles/colors.ts` as `COLORS` object
- Main colors: `ROLLPE_MAIN` (#FF5656), `ROLLPE_PRIMARY` (white), `ROLLPE_SECONDARY` (black)
- Use rem units for responsive design
- Font: Pretendard Variable loaded via `next/font/local`
- Apply CSS variables with `--font-pretendard`
- Configured in `next.config.mjs` with SSR support

### TypeScript Types

**Core Types** (`public/utils/types.ts`):
- `Rollpe` - Main rollpe object with host, theme, size, ratio, hearts, etc.
- `Heart` - Individual message with id, author, content, color, position
- `User` - User object with id, identifyCode, name, email, provider
- `RollpeInstance` - Theme/Size/Ratio configuration options

### Component Structure

```
app/_components/
├── ui/              # Reusable UI components (buttons, inputs, cards, modals)
├── rollpe/          # Rollpe-specific components (preview, whole view, HeartPaper)
├── MainPage/        # Main page sections
├── OnBoarding/      # Onboarding flow components
└── redux-provider/  # Redux setup component
```

### OAuth Integration

- **Kakao OAuth**: Uses REST API key, SDK, and JS key from env
- **Google OAuth**: Uses client key from env
- OAuth handlers in `app/(layout_B)/oauth/callback/{provider}/`
- Callback URL: `NEXT_PUBLIC_OAUTH_BASE_URL`

## Important Patterns

### Fixed Mobile Layout
Root layout enforces 768px max-width with fixed positioning and border, simulating a mobile app viewport.

### Cookie-Based Authentication
- Access and refresh tokens stored as httpOnly cookies (set on server)
- Never expose tokens to client-side JavaScript
- Use `cookies()` from `next/headers` in server components/actions

### API Proxy
All API requests route through `/api/*` which rewrites to backend URL to avoid CORS issues.

### Environment Variables
Required in `.env.local`:
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_KAKAO_REST_API_KEY`
- `NEXT_PUBLIC_KAKAO_SDK`
- `NEXT_PUBLIC_KAKAO_JS`
- `NEXT_PUBLIC_GOOGLE_CLIENT_KEY`
- `NEXT_PUBLIC_OAUTH_BASE_URL`

## Naming Conventions

From README conventions:
- **Component files**: PascalCase (e.g., `SignInForm.tsx`)
- **Utils/APIs**: camelCase (e.g., `signIn.ts`, `getRollpeList`)
- **Type definitions**: camelCase with Interface prefix (e.g., `interface User`)
- **Config files**: kebab-case (e.g., `next.config.mjs`)

## Commit Message Format

```
[Type] Description in English (#PR-number)
```

Types: `Feat`, `Refactor`, `Remove`, `Docs`, `Chore`

## Current Refactoring Status

As of November 2025, the project is undergoing refactoring. Recent changes include:
- Login page refactoring
- Button component improvements
- Global CSS styling enhancements
- Onboarding component style improvements
