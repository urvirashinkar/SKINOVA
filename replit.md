# GlowScan: AI Skin Consultant Application

## Overview

GlowScan is a skin analysis web application built with React for the frontend and Express for the backend. The application uses a modern tech stack including Tailwind CSS for styling, Drizzle ORM for database interactions, and follows a client-server architecture with shared types.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is a React application using:
- **React**: Core UI library
- **Wouter**: Lightweight routing solution
- **TanStack Query**: Data fetching and state management
- **Tailwind CSS**: Utility-first CSS framework with custom theme
- **Radix UI**: Accessible component primitives with shadcn/ui styling
- **TypeScript**: Type safety throughout the codebase

The UI follows a component-based architecture with:
- Reusable UI components from shadcn/ui
- Custom business components for specific features
- Page components for different routes
- Hooks for shared logic

### Backend Architecture

The backend is a Node.js Express server with:
- **Express**: HTTP server framework
- **Drizzle ORM**: Database access layer
- **TypeScript**: Type safety
- **Shared schema**: Types shared between frontend and backend

The server follows a layered architecture:
- Routes layer: Handles HTTP requests
- Storage layer: Database access abstraction
- Schema layer: Data models and validation

### Data Storage

The application uses:
- **Drizzle ORM**: SQL query builder and schema definition
- **PostgreSQL**: Not currently implemented but configured to be used
- **In-memory storage**: Currently implemented as a fallback

## Key Components

### Frontend Components

1. **Pages**: 
   - Home: Landing page with AI scan call-to-action
   - Report: Shows skin analysis results
   - Kit: Recommends skincare products based on analysis
   - Journal: Tracks skin condition over time

2. **UI Components**:
   - Core UI components from shadcn/ui (Button, Card, Dialog, etc.)
   - Custom components (FaceScanButton, ProductCard, SkinReportCard, etc.)

3. **Data Management**:
   - QueryClient for API interaction
   - Static mock data in `data.ts` for development

### Backend Components

1. **Express Server**:
   - HTTP server with JSON middleware
   - API routes handler
   - Request logging

2. **Storage Interface**:
   - Abstract storage interface
   - MemStorage implementation for development
   - Ready to be extended with Drizzle/PostgreSQL implementation

3. **Schema**:
   - Users table definition
   - Zod validation schemas

## Data Flow

1. **Client Requests**:
   - User interacts with the UI
   - React components trigger API calls via TanStack Query
   - API calls made to backend endpoints

2. **Server Processing**:
   - Express routes receive requests
   - Routes call storage methods to access data
   - Currently using in-memory storage (MemStorage)
   - Responses formatted as JSON

3. **Data Persistence**:
   - Currently using in-memory storage
   - Configured for PostgreSQL via Drizzle ORM
   - Schema defined in `shared/schema.ts`

## External Dependencies

### Frontend Dependencies
- React ecosystem (react, react-dom)
- Styling (tailwind, shadcn/ui components)
- Routing (wouter)
- Data fetching (tanstack/react-query)
- UI components (radix-ui components)
- Form handling (react-hook-form, zod)

### Backend Dependencies
- Express for HTTP server
- Drizzle ORM for database access
- PostgreSQL driver (@neondatabase/serverless)
- TypeScript for type safety

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Build Process**:
   - Vite builds the frontend into static assets
   - esbuild bundles the server code
   - Output directories configured in vite.config.ts

2. **Runtime Configuration**:
   - Environment variables for database connection
   - NODE_ENV for production/development modes
   - Replit-specific configuration in .replit file

3. **Server Configuration**:
   - Development mode: Vite dev server with HMR
   - Production mode: Static file serving with Express

4. **Database Setup**:
   - Drizzle ORM configured for PostgreSQL
   - Schema defined and ready to be pushed to database

## Development Guidelines

1. **Adding New Features**:
   - Frontend: Add components in `client/src/components` and pages in `client/src/pages`
   - Backend: Add routes in `server/routes.ts` and storage methods in `server/storage.ts`
   - Shared: Add schema definitions in `shared/schema.ts`

2. **Database Migration**:
   - Update schema in `shared/schema.ts`
   - Run `npm run db:push` to apply changes

3. **Running the Application**:
   - Development: `npm run dev`
   - Production build: `npm run build`
   - Production start: `npm run start`