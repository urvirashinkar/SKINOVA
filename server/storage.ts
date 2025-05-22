import { 
  users, type User, type InsertUser,
  skinAnalysis, type SkinAnalysis, type InsertSkinAnalysis,
  products, type Product, type InsertProduct,
  journalEntries, type JournalEntry, type InsertJournalEntry 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Skin Analysis methods
  getSkinAnalysis(id: number): Promise<SkinAnalysis | undefined>;
  getUserSkinAnalyses(userId: number): Promise<SkinAnalysis[]>;
  createSkinAnalysis(analysis: InsertSkinAnalysis): Promise<SkinAnalysis>;
  
  // Products methods
  getProduct(id: number): Promise<Product | undefined>;
  getAllProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Journal Entry methods
  getJournalEntry(id: number): Promise<JournalEntry | undefined>;
  getUserJournalEntries(userId: number): Promise<JournalEntry[]>;
  createJournalEntry(entry: InsertJournalEntry): Promise<JournalEntry>;
  deleteJournalEntry(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Skin Analysis methods
  async getSkinAnalysis(id: number): Promise<SkinAnalysis | undefined> {
    const [analysis] = await db.select().from(skinAnalysis).where(eq(skinAnalysis.id, id));
    return analysis;
  }

  async getUserSkinAnalyses(userId: number): Promise<SkinAnalysis[]> {
    return db.select().from(skinAnalysis).where(eq(skinAnalysis.userId, userId));
  }

  async createSkinAnalysis(analysis: InsertSkinAnalysis): Promise<SkinAnalysis> {
    const [result] = await db.insert(skinAnalysis).values(analysis).returning();
    return result;
  }

  // Products methods
  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async getAllProducts(): Promise<Product[]> {
    return db.select().from(products);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const [result] = await db.insert(products).values(product).returning();
    return result;
  }

  // Journal Entry methods
  async getJournalEntry(id: number): Promise<JournalEntry | undefined> {
    const [entry] = await db.select().from(journalEntries).where(eq(journalEntries.id, id));
    return entry;
  }

  async getUserJournalEntries(userId: number): Promise<JournalEntry[]> {
    return db.select().from(journalEntries).where(eq(journalEntries.userId, userId));
  }

  async createJournalEntry(entry: InsertJournalEntry): Promise<JournalEntry> {
    const [result] = await db.insert(journalEntries).values(entry).returning();
    return result;
  }

  async deleteJournalEntry(id: number): Promise<boolean> {
    const result = await db.delete(journalEntries).where(eq(journalEntries.id, id));
    return result.count > 0;
  }
}

export const storage = new DatabaseStorage();
