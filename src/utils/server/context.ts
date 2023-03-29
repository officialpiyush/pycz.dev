import type { inferAsyncReturnType } from "@trpc/server";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export async function createContext({ req }: FetchCreateContextFnOptions) {
  const isAuthed =
    req.headers.has("x-dashboard-key") &&
    process.env.DASHBOARD_KEY ===
      req.headers.get("x-dashboard-key")?.toString();

  return {
    isAuthed,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
