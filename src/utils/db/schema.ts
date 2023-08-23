import type { InferModel } from "drizzle-orm";
import {
  boolean,
  mysqlEnum,
  mysqlTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar
} from "drizzle-orm/mysql-core";

export const links = mysqlTable(
  "links",
  {
    id: serial("id").primaryKey(),
    key: varchar("key", { length: 200 }).notNull(),
    parent: mysqlEnum("parent", ["none", "link"]).default("none").notNull(),
    description: text("description"),
    url: text("url").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    enabled: boolean("enabled").default(true).notNull(),
  },
  (links) => ({
    keyIndex: uniqueIndex("key_idx").on(links.key),
  })
);

export type LinksSchema = InferModel<typeof links>;
