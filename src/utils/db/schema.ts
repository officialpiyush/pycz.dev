import { nanoid } from "nanoid";
import {
  boolean,
  mysqlEnum,
  serial,
  text,
  timestamp,
} from "drizzle-orm/mysql-core/columns";
import { mysqlTable } from "drizzle-orm/mysql-core/table";
import { uniqueIndex } from "drizzle-orm/mysql-core/indexes";
import type { InferModel } from "drizzle-orm";

export const links = mysqlTable(
  "links",
  {
    id: serial("id").primaryKey(),
    key: text("key").notNull(),
    parent: mysqlEnum("parent", ["none", "link"]).default("none").notNull(),
    description: text("description"),
    url: text("url").notNull(),
    createdAt: timestamp("created_at", { fsp: 2 }).notNull().defaultNow(),
    enabled: boolean("enabled").default(true).notNull(),
  },
  (links) => ({
    keyIndex: uniqueIndex("key_idx").on(links.key),
  })
);

export type LinksSchema = InferModel<typeof links>;
