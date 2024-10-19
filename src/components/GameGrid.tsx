import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { games, error, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6">
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!loading &&
          games.map((game) => <GameCard key={game.id} game={game}></GameCard>)}
      </div>
    </>
  );
}

export default GameGrid;
