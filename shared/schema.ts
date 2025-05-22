import { pgTable, text, serial, integer, boolean, timestamp, json, pgEnum, jsonb, index, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table for Auth0 sessions
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

export const users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(), // Auth0 user ID
  email: text("email").unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  profileImageUrl: text("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  updatedAt: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// For Auth0 integration
export type UpsertUser = typeof users.$inferInsert;

// Enums for journal entries
export const moodEnum = pgEnum('mood', ['sad', 'neutral', 'happy', 'amazing']);

// Skin Analysis Table
export const skinAnalysis = pgTable("skin_analysis", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id),
  scanDate: timestamp("scan_date").defaultNow(),
  scanQuality: text("scan_quality").notNull(),
  confidence: text("confidence").notNull(),
  skinType: json("skin_type").notNull(),
  acneConcerns: json("acne_concerns").notNull(),
  hyperpigmentation: json("hyperpigmentation").notNull(),
  hydrationLevel: json("hydration_level").notNull(),
  fineLines: json("fine_lines").notNull(),
  photoUrl: text("photo_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertSkinAnalysisSchema = createInsertSchema(skinAnalysis).omit({
  id: true,
  createdAt: true,
});

export type InsertSkinAnalysis = z.infer<typeof insertSkinAnalysisSchema>;
export type SkinAnalysis = typeof skinAnalysis.$inferSelect;

// Products Table
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  tag: text("tag").notNull(),
  description: text("description").notNull(),
  price: text("price").notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
  createdAt: true,
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

// Journal Entries Table
export const journalEntries = pgTable("journal_entries", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id),
  date: timestamp("date").defaultNow(),
  mood: moodEnum("mood").notNull(),
  notes: text("notes").notNull(),
  photoUrl: text("photo_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertJournalEntrySchema = createInsertSchema(journalEntries).omit({
  id: true,
  createdAt: true,
});

export type InsertJournalEntry = z.infer<typeof insertJournalEntrySchema>;
export type JournalEntry = typeof journalEntries.$inferSelect;
