# osTicket with Next.js demo

This fork is based on the official osTicket `v1.18.2` release. In addition to the classic PHP codebase, a new `nextjs-app/` directory contains a minimal Next.js prototype showing how the frontend could be rewritten in React.

## Current status
- The PHP application continues to function normally and matches the upstream 1.18 series.
- The Next.js app is only a demo with a landing page and placeholder ticket form.

## Running the demo frontend
```bash
cd nextjs-app
npm install
npm run dev
```
This will start the Next.js dev server on `http://localhost:3000`.

## License
This repository remains under the GPL-2.0 license. See [LICENSE.txt](LICENSE.txt) for details.
