export const fetchArticles = async () => {
  const response = await fetch("/api/articles");
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
};

export const fetchArticle = async (slug: string) => {
  const response = await fetch(`/api/articles/${slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
};
