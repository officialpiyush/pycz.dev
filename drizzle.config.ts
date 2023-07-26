import type { Config } from "drizzle-kit";

export default {
  out: "./src/utils/db/migrations",
  schema: "./src/utils/db",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
} satisfies Config;
