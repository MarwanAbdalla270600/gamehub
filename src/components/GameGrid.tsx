import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6">
        {games.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
        ))}
      </div>
    </>
  );
}

export default GameGrid;
