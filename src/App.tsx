import GameGrid from "./components/GameGrid";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="container py-4 mx-auto">
      <header className="w-full">
        <NavBar></NavBar>
      </header>
      <div className="flex">
        <div id="aside" className="w-60">
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
