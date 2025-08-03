// db/client.ts
import { drizzle } from "drizzle-orm/sqlite3";
import sqlite3 from "sqlite3";

const sqlite = new sqlite3.Database(process.env.DB_FILE_NAME!);
export const db = drizzle(sqlite);
