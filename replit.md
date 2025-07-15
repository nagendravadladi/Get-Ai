# Get AI - AI Tools Directory

## Overview

Get AI is a modern, responsive web application that serves as a comprehensive directory of AI tools across various categories. Built with React, TypeScript, and a Node.js backend, it provides users with an intuitive way to discover, search, and explore AI tools with detailed information about their functionality, pricing, and status.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library based on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Theme System**: Custom dark/light theme provider with localStorage persistence

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **Development**: Hot module replacement via Vite integration

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express.js application
├── shared/          # Shared types and schemas
├── migrations/      # Database migration files
└── attached_assets/ # Static assets and requirements
```

## Key Components

### Frontend Components
- **Navigation**: Fixed header with search, category dropdown, and theme toggle
- **CategorySection**: Netflix-style horizontal scrollable tool cards
- **ToolCard**: Individual AI tool display with status indicators, pricing badges, and external links
- **Search Functionality**: Real-time search across all tools with results page
- **Filter System**: Category-based filtering with working status and pricing filters

### Backend Components
- **Storage Interface**: Abstracted CRUD operations with in-memory implementation
- **Route Registration**: Modular API route system with /api prefix
- **Development Server**: Integrated Vite middleware for seamless development experience

### Data Model
- **AI Tools**: Comprehensive tool information including name, description, category, status, pricing, and external links
- **Categories**: Organized groupings with emoji identifiers and tool collections
- **User System**: Basic user schema with username/password authentication (prepared but not implemented)

## Data Flow

1. **Tool Discovery**: Users browse categorized sections on the homepage
2. **Search**: Real-time search functionality filters tools across all categories
3. **Category Navigation**: Dedicated category pages with advanced filtering options
4. **Tool Access**: External links open AI tools in new tabs
5. **Theme Persistence**: User theme preferences stored in localStorage
6. **Responsive Design**: Mobile-first approach with horizontal scrolling on mobile devices

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React routing solution
- **@radix-ui/***: Accessible UI component primitives

### Development Tools
- **Vite**: Fast build tool with HMR
- **TypeScript**: Type safety across the entire stack
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production builds

### UI Enhancement
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility
- **date-fns**: Date manipulation library
- **embla-carousel-react**: Smooth carousel functionality

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: ESBuild bundles server code with external package handling
3. **Output Structure**: 
   - Frontend: `dist/public/` directory
   - Backend: `dist/index.js` single file bundle

### Environment Configuration
- **Development**: Local development with hot reloading via Vite
- **Production**: Node.js server serving static frontend and API routes
- **Database**: PostgreSQL connection via environment variable `DATABASE_URL`

### Deployment Requirements
- Node.js runtime environment
- PostgreSQL database (Neon serverless recommended)
- Environment variables for database connection
- Static file serving capability for frontend assets

### Scripts
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Database schema deployment via Drizzle

The application is designed for easy deployment on platforms like Replit, Vercel, or traditional cloud providers, with a focus on serverless-friendly architecture and minimal configuration requirements.