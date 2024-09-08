interface GamePageProps {
  params: { slug: string };
}

const GamePage: React.FC<GamePageProps> = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <h1>Game {slug}</h1>
    </div>
  );
};

export default GamePage;
