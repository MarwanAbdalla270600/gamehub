import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/Navbar";
import { Genre } from "./hooks/useGenres";

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  return (
    <div className="container p-4 mx-auto">
      <header className="w-full">
        <NavBar></NavBar>
      </header>
      <div className="flex px-2 pt-4">
        <div id="aside" className="hidden w-60 md:block">
          <GenreList handleClick={(genre) => setSelectedGenre(genre)}></GenreList>
        </div>
        <div id="main" className="flex-1">
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
        </div>
      </div>
    </div>
  );
}

export default App;
