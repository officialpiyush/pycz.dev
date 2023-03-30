import db from "./connection";
import { links } from "./schema";
import { and, eq } from "drizzle-orm/expressions";
import type { InferModel } from "drizzle-orm";

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

export type CreateLinkParams = InferModel<typeof links>;

export async function createLink(data: CreateLinkParams) {
  try {
    const databaseQueryLinks = await db.insert(links).values(data);

    return databaseQueryLinks;
  } catch (error) {
    return null;
  }
}
