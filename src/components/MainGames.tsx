import useGame from '../hooks/useGame.ts';
import GameCards from './GameCards.tsx';

const MainGames = () => {
  const {games, error} = useGame();

  return (
    <main className='grid gap-y-8 gap-x-5 justify-items-center grid-cols-game-cards-col px-5 pb-4 mt-6'>
      {games.map(game => {
        return <GameCards key={game.id} game={game}/>
      })}
    </main>
  )
};

export default MainGames;
