import Navigation from "./components/NavigationBar";
import MainGames from "./components/MainGames";

const App = () => {
  return (
    <div className="grid grid-cols-app-structure-col grid-rows-app-structure-row overflow-x-hidden h-screen">
      <Navigation />
      <aside className="bg-green-300">Aside</aside>
      <MainGames />
    </div>
  )
}

export default App
