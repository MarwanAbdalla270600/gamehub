import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortingSelector from "./components/SortingSelector";
import DynamicHeader from "./components/DynamicHeader";
import { GameQuery } from "./hooks/useGames";
import PagingButton from "./components/PagingButtons";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="container p-4 mx-auto">
      <header className="w-full">
        <NavBar
          handeSearch={(search) => setGameQuery({ ...gameQuery, search })}
        ></NavBar>
      </header>
      <div className="flex px-2 pt-4">
        <div id="aside" className="hidden w-52 md:block">
          <GenreList
            selectedGenre={gameQuery.genre}
            handleClick={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </div>
        <div id="main" className="flex flex-col flex-1 gap-8 pb-8">
          <DynamicHeader
            platform={gameQuery.platform?.name}
            genre={gameQuery.genre?.name}
          ></DynamicHeader>
          <div className="flex gap-4">
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              handleSelect={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            ></PlatformSelector>
            <SortingSelector
              selectedSort={gameQuery.order}
              handleSelect={(order) => setGameQuery({ ...gameQuery, order })}
            ></SortingSelector>
          </div>
          <GameGrid gameQuery={gameQuery}></GameGrid>
          <PagingButton handleClick={(page)=>setGameQuery({...gameQuery, page})}></PagingButton>
        </div>
      </div>
    </div>
  );
}

export default App;
