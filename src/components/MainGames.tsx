import useGame from "../hooks/useGames.ts";
import GameCards from "./GameCards.tsx";
import GameCardsSkeleton from "./GameCardsSkeleton.tsx";
import GameCardsContainer from "./GameCardsContainer.tsx";
import PlatformsSelector from "./PlatformsSelector.tsx";

import { SelectedGenreType } from "../types/genres";
import { SelectedPltaformType } from "../types/platforms.ts";

const MainGames = ({ selectedGenre, selectedPlatform }: { selectedGenre: SelectedGenreType, selectedPlatform: SelectedPltaformType}) => {
  const { data: games, error, isLoading } = useGame(
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre, selectedPlatform]
  );
  const gameCardsCount = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <main className={`relative grid gap-y-8 gap-x-7 justify-items-center grid-rows-game-cards-row grid-cols-game-cards-col ${isLoading ? 'overflow-y-hidden' : ''}`}>
      {isLoading &&
        gameCardsCount.map((sklt) => {
          return (
            <GameCardsContainer key={sklt}>
              <GameCardsSkeleton />
            </GameCardsContainer>
          );
        })}
      {games?.map((game) => {
        return (
          <GameCardsContainer key={game.id}>
            <GameCards game={game} />
          </GameCardsContainer>
        );
      })}
    </main>
  );
};

export default MainGames;
