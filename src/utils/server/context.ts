import { TRPCError, inferAsyncReturnType } from "@trpc/server";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export async function createContext({ req }: FetchCreateContextFnOptions) {
  if (!req.headers.get("x-dashboard-key")) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Missing x-dashboard-key header",
    });
  }
  const isAuthed =
    process.env.DASHBOARD_KEY ===
    req.headers.get("x-dashboard-key")?.toString();

  return {
    isAuthed,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
