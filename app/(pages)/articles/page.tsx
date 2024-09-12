"use client";
import React, { useEffect, useState } from "react";
import { fetchArticles } from "@/data/fetch/articles";
import { Article } from "@/data/entity";
import { truncateText } from "@/lib/util";
import Link from "next/link";

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch (error) {
        console.error("Database connection error:", error);
      }
    };

    getArticles();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h2 className="mb-4 font-bold text-4xl">
              <Link href={`articles/${article.slug}`}>{article.title}</Link>
            </h2>
            <div className="mb-4">{truncateText(article.body, 150)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;
