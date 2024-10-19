import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid({ selectedGenre }: { selectedGenre: Genre | null }) {
  const { data, error, loading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6">
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!loading &&
          data.map((game) => <GameCard key={game.id} game={game}></GameCard>)}
      </div>
    </>
  );
}

export default GameGrid;
