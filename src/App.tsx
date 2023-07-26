import Navigation from "./components/NavigationBar";
import MainGames from "./components/MainGames";
import GenresAside from "./components/GenresAside";
import { useState } from "react";

import { Genre, SelectedGenreType } from "./types/genres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<SelectedGenreType>(-1);

  return (
    <div className="grid grid-cols-app-structure-col grid-rows-app-structure-row overflow-x-hidden h-screen">
      <Navigation />
      <GenresAside
        selectedGenreId={selectedGenre.id}
        onSelectedGenre={(genre: Genre) => setSelectedGenre(genre)}
      />
      <MainGames selectedGenre={selectedGenre}/>
    </div>
  );
};

export default App;
