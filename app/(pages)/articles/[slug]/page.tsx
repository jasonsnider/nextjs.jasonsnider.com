"use client";
import React, { useEffect, useState } from "react";
import { fetchArticle } from "@/data/fetch/articles";
import { Article } from "@/data/entity";
import Markdown from "react-markdown";

interface ArticlePageProps {
  params: { slug: string };
}

const ArticlePage: React.FC<ArticlePageProps> = ({ params }) => {
  const [article, setArticle] = useState<Article>();
  const { slug } = params;

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticle(slug);
        setArticle(data);
      } catch (error) {
        console.error("Database connection error:", error);
      }
    };

    getArticles();
  }, [slug]);

  return (
    <div>
      {article ? (
        <>
          <h1 className="text-4xl font-bold mb-4">Article {article.title}</h1>
          <Markdown>{article.body}</Markdown>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArticlePage;
