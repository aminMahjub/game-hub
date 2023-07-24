import { Game } from "../hooks/useGame";

const GameCards = ({ game }: { game: Game }) => {
  const { name, background_image: cardBgImage } = game;

  return (
    <div className="card glass w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={cardBgImage} alt="Shoes" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
};

export default GameCards;
