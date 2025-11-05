# DevOps Portfolio Application

## Overview

This is a premium DevOps portfolio website for Syed Ahamed, built as a single-page application showcasing professional experience, skills, education, and contact information. The application features a modern glassmorphism design aesthetic with terminal-inspired elements, combining Linear's minimalist tech aesthetic with Stripe's sophisticated restraint.

The portfolio is designed to present DevOps engineering expertise in containerization, CI/CD pipelines, cloud infrastructure, and maritime edge computing environments.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**Routing**: Wouter for lightweight client-side routing. The application currently has two routes:
- `/` - Home page (main portfolio)
- `*` - 404 Not Found page

**UI Component Library**: shadcn/ui components built on Radix UI primitives. The component library uses the "new-york" style variant with Tailwind CSS for styling.

**State Management**: TanStack Query (React Query) for server state management, though currently the application is primarily static with minimal server interaction.

**Styling System**:
- **Tailwind CSS** for utility-first styling with custom configuration
- **Typography**: Inter (primary font) and JetBrains Mono (monospace for terminal elements)
- **Design Tokens**: Custom CSS variables for theming with light/dark mode support
- **Color System**: HSL-based color tokens for consistent theming
- **Glassmorphism Effects**: Backdrop blur, transparency, and layered depth effects

**Key Design Patterns**:
- Component composition with reusable GlassCard wrapper
- Typed animation effects (terminal cursor, floating shapes)
- Smooth scroll behavior with section-based navigation
- Responsive mobile-first design with breakpoints

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Development Setup**: The application uses a Vite middleware mode during development, allowing the Express server to handle API routes while Vite serves the frontend with HMR (Hot Module Replacement).

**Production Build**: Vite builds the client into `dist/public`, while esbuild bundles the server code into `dist/index.js` as an ESM module.

**Storage Layer**: Currently uses an in-memory storage implementation (`MemStorage` class) with a simple user CRUD interface. The storage interface is designed to be swappable with a database-backed implementation.

**API Structure**: The application is structured to prefix all API routes with `/api`, though currently no routes are implemented. The route registration system is prepared in `server/routes.ts`.

**Request Logging**: Custom middleware logs API requests with method, path, status code, duration, and truncated response bodies.

### Data Storage Solutions

**Current Implementation**: In-memory storage using JavaScript Map structures for user data.

**Database Schema**: Drizzle ORM schema defined for PostgreSQL with a basic users table containing:
- `id` (varchar, primary key, auto-generated UUID)
- `username` (text, unique, not null)
- `password` (text, not null)

**Migration System**: Drizzle Kit configured for PostgreSQL migrations with schema in `shared/schema.ts` and migrations output to `./migrations`.

**Database Configuration**: Expects `DATABASE_URL` environment variable for PostgreSQL connection via Neon serverless driver.

**Rationale**: The application is designed to support future authentication and user management, though the current portfolio is static. The storage abstraction allows easy migration from in-memory to database-backed storage without changing application code.

### Authentication and Authorization

**Current State**: No authentication implemented. The storage interface includes user CRUD methods prepared for future authentication features.

**Prepared Infrastructure**: User schema with username/password fields and validation using Zod schemas via drizzle-zod integration.

### External Dependencies

**UI Component Dependencies**:
- **Radix UI**: Comprehensive set of unstyled, accessible component primitives (accordion, dialog, dropdown, popover, tabs, toast, tooltip, etc.)
- **shadcn/ui**: Pre-styled component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating variant-based component APIs
- **tailwind-merge** & **clsx**: Utility functions for conditional class name management

**Frontend Libraries**:
- **TanStack Query**: Server state management and data fetching
- **Wouter**: Lightweight routing (2KB alternative to React Router)
- **React Hook Form** with **@hookform/resolvers**: Form state management (prepared for future use)
- **date-fns**: Date manipulation utilities
- **embla-carousel-react**: Carousel component
- **cmdk**: Command menu component (prepared for future use)

**Backend Dependencies**:
- **Express**: Web framework for Node.js
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **connect-pg-simple**: PostgreSQL session store (prepared for future session management)

**Development Tools**:
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Type safety across the application
- **esbuild**: Fast JavaScript bundler for production server build
- **tsx**: TypeScript execution for development server
- **Drizzle Kit**: Database migration and management tool
- **Replit Plugins**: Development environment integration (cartographer, dev banner, runtime error modal)

**Build Configuration**:
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration

**Font Dependencies**:
- **Google Fonts**: Inter and JetBrains Mono loaded via CDN in index.html

**Database**:
- **PostgreSQL**: Expected database (via Neon serverless driver), though not currently provisioned
- Configuration ready but DATABASE_URL not set in current deployment