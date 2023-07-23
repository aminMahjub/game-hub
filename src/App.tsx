import Navigation from "./components/NavigationBar";

const App = () => {
  return (
    <div className="grid grid-cols-main-structure-col grid-rows-main-structure-row overflow-hidden h-screen">
      <Navigation />
      <aside className="bg-green-300">Aside</aside>
      <main className="bg-blue-500">Main</main>
    </div>
  )
}

export default App
