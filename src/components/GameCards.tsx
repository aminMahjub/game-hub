import PlatformsList from "./PlatformsList";
import MetaCritic from "./MetaCritic";

import { Game } from "../types/games";

const GameCards = ({ game }: { game: Game }) => {
  const { name, background_image: cardBgImage, parent_platforms, metacritic } = game;

  return (
    <>
      <figure>
        <img src={cardBgImage} alt="Shoes" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>

      <MetaCritic metacriticCount={metacritic} />

      <PlatformsList parent_platforms={parent_platforms} />
    </>
  );
};

export default GameCards;
