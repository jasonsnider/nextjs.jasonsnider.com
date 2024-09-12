import { findArticles } from "@/data/query/articles";

export async function GET() {
  try {
    const data = await findArticles();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database connection error:", error);
    console.log("DB Connection Error:", error);
    return new Response(
      JSON.stringify({ message: "Database connection failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
