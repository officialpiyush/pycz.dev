import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./router";

const key = localStorage.getItem("key");

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "/trpc",
      headers: {
        "x-dashboard-key": key || "",
      },
    }),
  ],
});

export default client;
