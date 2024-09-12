import { NextRequest, NextResponse } from "next/server";
import { findArticle } from "@/data/query/articles";

export async function GET(request: NextRequest) {
  const slug = request.url.split("/").pop() ?? "";

  try {
    const data = await findArticle(slug);
    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return new NextResponse(
      JSON.stringify({ message: "Database connection failed" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
