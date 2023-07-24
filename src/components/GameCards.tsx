import { Game } from "../hooks/useGame";
import PlatformsList from "./PlatformsList";

const GameCards = ({ game }: { game: Game }) => {
  const { name, background_image: cardBgImage, parent_platforms } = game;

  return (
    <div className="card w-96 bg-neutral text-neutral-content shadow-xl max-h-96">
      <figure>
        <img src={cardBgImage} alt="Shoes" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
      <PlatformsList parent_platforms={parent_platforms} />
    </div>
  );
};

export default GameCards;
