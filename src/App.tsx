import Navigation from "./components/NavigationBar";
import MainGames from "./components/MainGames";
import GenresAside from "./components/GenresAside";
import PlatformsSelector from "./components/PlatformsSelector"; 

import { useState } from "react";

import { Genre } from "./types/genres";
import { Platforms } from "./types/platforms";
import { QueryType } from "./types/global";

const App = () => {
  const [queries, setQueries] = useState<QueryType>({
    selectedGenre: null,
    selectedPlatform: null,
  });

  return (
    <div className="grid grid-cols-app-structure-col grid-rows-app-structure-row overflow-x-hidden h-screen">
      <Navigation />
      <GenresAside
        selectedGenreId={queries.selectedGenre?.id}
        onSelectedGenre={(genre: Genre) => setQueries({...queries, selectedGenre: genre})}
      />
      <div className="px-5 pb-4 mt-6">
        <h1 className="text-4xl ml-7 mb-10 ">{queries.selectedGenre?.name + ' Games' ?? 'Games'}</h1>
        <PlatformsSelector onChangePlatform={(plt: Platforms) => setQueries({...queries, selectedPlatform: plt})} />
        <MainGames selectedGenre={queries.selectedGenre} selectedPlatform={queries.selectedPlatform} />

      </div>
    </div>
  );
};

export default App;
