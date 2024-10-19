import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/Navbar";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre |null;
  platform: Platform |null
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  
  return (
    <div className="container p-4 mx-auto">
      <header className="w-full">
        <NavBar></NavBar>
      </header>
      <div className="flex px-2 pt-4">
        <div id="aside" className="hidden w-60 md:block">
          <GenreList
            selectedGenre={gameQuery.genre}
            handleClick={(genre) => setGameQuery({...gameQuery, genre})}
          ></GenreList>
        </div>
        <div id="main" className="flex-1">
          <PlatformSelector selectedPlatform={gameQuery.platform} handleSelect={(platform)=>setGameQuery({...gameQuery, platform})}></PlatformSelector>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </div>
      </div>
    </div>
  );
}

export default App;
