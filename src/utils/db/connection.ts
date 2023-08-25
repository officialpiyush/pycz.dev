import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const { DATABASE_URL, DATABASE_AUTH_TOKEN } = import.meta.env;

const connection = createClient({
  url: DATABASE_URL!,
  authToken: DATABASE_AUTH_TOKEN,
});

const db = drizzle(connection);

export default db;
