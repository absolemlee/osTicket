import './globals.css';
import { ReactNode } from 'react';
import { httpBatchLink } from '@trpc/client';
import { trpc } from './trpcClient';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  const trpcClient = trpc.createClient({
    links: [httpBatchLink({ url: '/api/trpc' })],
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </trpc.Provider>
  );
}
