import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const connection = createClient({
  url: import.meta.env.DATABASE_URL,
  authToken: import.meta.env.DATABASE_AUTH_TOKEN,
});

const db = drizzle(connection);

export default db;
