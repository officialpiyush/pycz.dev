import { initTRPC, TRPCError } from "@trpc/server";
import { z } from "zod";
import type { Context } from "./context";

export const t = initTRPC.context<Context>().create();

const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.isAuthed) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Missing x-dashboard-key header",
    });
  }

  return next();
});

export const protectedRouter = t.procedure.use(isAuthed);

export const appRouter = t.router({
  getLinkByKey: t.procedure.input(z.string()).query(({ input }) => {
    return `https://pycz.dev`;
  }),
  createLink: protectedRouter
    .input(
      z.object({
        key: z.string().min(1),
        link: z.string().url(),
        description: z.string().optional(),
      })
    )
    .mutation(({ input }) => {
      return {
        id: "1",
      };
    }),
});

export type AppRouter = typeof appRouter;