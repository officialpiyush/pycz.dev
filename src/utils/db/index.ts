import db from "./connection";
import { links } from "./schema";
import { and, eq } from "drizzle-orm/expressions";

export async function getLink(key: string) {
  const databaseQueryLinks = await db
    .select()
    .from(links)
    .where(and(eq(links.key, key), eq(links.enabled, true)));

  if (!databaseQueryLinks || !databaseQueryLinks.length) {
    return null;
  }

  return databaseQueryLinks[0].url;
}
