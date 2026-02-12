# ReplyAI

ReplyAI is a production-style SaaS platform for automating customer conversations across WhatsApp, Instagram, and Email using AI + RAG.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- TailwindCSS + reusable Shadcn-style UI primitives
- Framer Motion + Chart.js
- NextAuth.js (Google OAuth + credentials)
- PostgreSQL + Prisma ORM
- Webhooks + REST API routes
- Docker deployment support

## Project Structure
```text
app/
  page.tsx                    # Landing page
  auth/*                      # Login/Register/Forgot password
  dashboard/*                 # Dashboard modules
  api/*                       # REST APIs + webhooks
components/
  ui/*                        # Reusable UI components
  marketing/*                 # Landing components
  charts/*                    # Chart.js wrappers
  layout/*                    # Dashboard shell
lib/
  auth.ts                     # NextAuth config
  prisma.ts                   # Prisma client
  ai.ts                       # RAG retrieval + AI reply orchestration
prisma/
  schema.prisma               # Database schema
docs/
  API.md                      # Endpoint documentation
```

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment:
   ```bash
   cp .env.example .env
   ```
3. Run database migration:
   ```bash
   npx prisma migrate dev --name init
   ```
4. Start dev server:
   ```bash
   npm run dev
   ```

## AI + RAG Flow
1. Training content is inserted through `/api/ai/train`.
2. Content is stored as `AITrainingData` with placeholder vector IDs.
3. Webhook messages trigger `generateBusinessReply` which:
   - fetches conversation history,
   - retrieves relevant business context,
   - returns a constrained business-only AI response.

## Deployment
- Local containers:
  ```bash
  docker-compose up --build
  ```
- Production image:
  ```bash
  docker build -t replyai .
  docker run -p 3000:3000 --env-file .env replyai
  ```
