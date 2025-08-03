import { sqliteTable, int, text } from 'drizzle-orm/sqlite-core';

export const postsTable = sqliteTable("posts_table", {
  id: int().primaryKey({ autoIncrement: false }),
  title: text().notNull(),
  slug: text().notNull().unique(),
  content: text().notNull(),
})
