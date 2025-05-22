import { 
  users, type User, type InsertUser, type UpsertUser,
  skinAnalysis, type SkinAnalysis, type InsertSkinAnalysis,
  products, type Product, type InsertProduct,
  journalEntries, type JournalEntry, type InsertJournalEntry 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods for Auth0 integration
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Skin Analysis methods
  getSkinAnalysis(id: number): Promise<SkinAnalysis | undefined>;
  getUserSkinAnalyses(userId: string): Promise<SkinAnalysis[]>;
  createSkinAnalysis(analysis: InsertSkinAnalysis): Promise<SkinAnalysis>;
  
  // Products methods
  getProduct(id: number): Promise<Product | undefined>;
  getAllProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Journal Entry methods
  getJournalEntry(id: number): Promise<JournalEntry | undefined>;
  getUserJournalEntries(userId: string): Promise<JournalEntry[]>;
  createJournalEntry(entry: InsertJournalEntry): Promise<JournalEntry>;
  deleteJournalEntry(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Skin Analysis methods
  async getSkinAnalysis(id: number): Promise<SkinAnalysis | undefined> {
    const [analysis] = await db.select().from(skinAnalysis).where(eq(skinAnalysis.id, id));
    return analysis;
  }

  async getUserSkinAnalyses(userId: string): Promise<SkinAnalysis[]> {
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

  async getUserJournalEntries(userId: string): Promise<JournalEntry[]> {
    return db.select().from(journalEntries).where(eq(journalEntries.userId, userId));
  }

  async createJournalEntry(entry: InsertJournalEntry): Promise<JournalEntry> {
    const [result] = await db.insert(journalEntries).values(entry).returning();
    return result;
  }

  async deleteJournalEntry(id: number): Promise<boolean> {
    await db.delete(journalEntries).where(eq(journalEntries.id, id));
    return true;
  }
}

export const storage = new DatabaseStorage();
