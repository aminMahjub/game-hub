import useGame from "../hooks/useGame.ts";
import GameCards from "./GameCards.tsx";
import GameCardsSkeleton from "./GameCardsSkeleton.tsx";
import GameCardsContainer from "./GameCardsContainer.tsx";

import { Genre } from "../types/genres";

const MainGames = ({ selectedGenre }: { selectedGenre: Genre }) => {
  const { games, error, isLoading } = useGame(
    { params: { genres: selectedGenre?.id } },
    [selectedGenre]
  );
  const gameCardsCount = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <main className={`relative grid gap-y-8 gap-x-7 justify-items-center grid-rows-game-cards-row grid-cols-game-cards-col px-5 pb-4 mt-6 ${isLoading ? 'overflow-y-hidden' : ''}`}>
      {isLoading &&
        gameCardsCount.map((sklt) => {
          return (
            <GameCardsContainer key={sklt}>
              <GameCardsSkeleton />
            </GameCardsContainer>
          );
        })}
      {games.map((game) => {
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
