import type { inferAsyncReturnType } from "@trpc/server";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export async function createContext({ req }: FetchCreateContextFnOptions) {
  const isAuthenticated =
    req.headers.has("x-dashboard-key") &&
    import.meta.env.DASHBOARD_KEY ===
      req.headers.get("x-dashboard-key")?.toString();

  return {
    isAuthenticated,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
