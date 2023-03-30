import type { Config } from "drizzle-kit";

export default {
  out: "./src/utils/db/migrations",
  schema: "./src/utils/db",
  connectionString: process.env.DATABASE_URL,
} satisfies Config;
