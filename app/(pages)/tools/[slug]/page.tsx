interface ToolPageProps {
  params: { slug: string };
}

const ToolPage: React.FC<ToolPageProps> = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <h1>Tool {slug}</h1>
    </div>
  );
};

export default ToolPage;
