import Navigation from "./components/NavigationBar";
import MainGames from "./components/MainGames";
import GenresAside from "./components/GenresAside";

const App = () => {
  return (
    <div className="grid grid-cols-app-structure-col grid-rows-app-structure-row overflow-x-hidden h-screen">
      <Navigation />
      <GenresAside />
      <MainGames />
    </div>
  )
}

export default App
