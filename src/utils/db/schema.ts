import { nanoid } from "nanoid";
import { boolean, text, timestamp } from "drizzle-orm/mysql-core/columns";
import { mysqlTable } from "drizzle-orm/mysql-core/table";
import { uniqueIndex } from "drizzle-orm/mysql-core/indexes";

export const links = mysqlTable(
  "links",
  {
    id: text("id").primaryKey().default(nanoid()),
    key: text("key").notNull(),
    parent: text("parent"),
    description: text("description"),
    url: text("url").notNull(),
    createdAt: timestamp("created_at", { fsp: 2 }).notNull().defaultNow(),
    enabled: boolean("enabled").default(true).notNull(),
  },
  (links) => ({
    keyIndex: uniqueIndex("key_idx").on(links.key),
  })
);
