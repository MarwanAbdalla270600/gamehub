import GameGrid from "./components/GameGrid";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="container p-4 mx-auto">
      <header className="w-full">
        <NavBar></NavBar>
      </header>
      <div className="flex">
        <div id="aside" className="hidden w-60 md:block">
          aside
        </div>
        <div id="main" className="flex-1">
          <GameGrid></GameGrid>
        </div>
      </div>
    </div>
  );
}

export default App;
