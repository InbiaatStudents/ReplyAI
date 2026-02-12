# ReplyAI REST API

## Authentication
- `POST /api/auth/[...nextauth]`: NextAuth entrypoint for Email/Google login.

## Conversations
- `GET /api/conversations`: Fetch latest conversations with messages.
- `POST /api/conversations`: Create a new conversation.

## AI Training
- `POST /api/ai/train`: Save knowledge source and simulated embedding id.

## Automation Rules
- `POST /api/automation-rules`: Create a rule (`condition` + `action`).

## Analytics
- `GET /api/analytics`: Retrieve analytics events.

## Webhooks
- `POST /api/webhooks/whatsapp`: Ingest inbound WhatsApp messages, persist history, generate AI response.

## Export
- `GET /api/export`: Download full conversation data as JSON.
