interface ArticlePageProps {
  params: { slug: string };
}

const ArticlePage: React.FC<ArticlePageProps> = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <h1>Article {slug}</h1>
    </div>
  );
};

export default ArticlePage;
