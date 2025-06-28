import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { Context } from '../context';

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  createTicket: t.procedure
    .input(z.object({
      email: z.string().email(),
      name: z.string(),
      subject: z.string(),
      message: z.string(),
    }))
    .mutation(async ({ input }) => {
      // Placeholder logic: would call backend PHP APIs or DB
      console.log('Ticket created', input);
      return { success: true };
    }),
});

export type AppRouter = typeof appRouter;
