import { Pool } from "pg";
import { Article } from "@/data/entity";

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || "5432", 10),
});

export const dynamic = "force-dynamic";

export async function findArticles(): Promise<Article[]> {
  try {
    const data = await pool.query("SELECT * FROM articles WHERE type='post' AND published<=NOW() ORDER BY published DESC");
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch articles.");
  }
}

export async function findArticle(slug: string): Promise<Article> {
  try {
    const data = await pool.query("SELECT * FROM articles WHERE slug = $1", [
      slug,
    ]);
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the article.");
  }
}
