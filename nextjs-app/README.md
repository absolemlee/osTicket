# osTicket Next.js Demo

This directory contains a small Next.js app that demonstrates how the osTicket frontend could be rewritten using React and tRPC. The project now uses the **app router** and **TypeScript**.

## Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

This starts Next.js at `http://localhost:3000`.

The demo exposes a ticket creation form at `/open` which calls a simple tRPC mutation.
