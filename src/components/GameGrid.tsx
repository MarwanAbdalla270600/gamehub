import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery
}

function GameGrid({gameQuery }: Props) {
  const { data, error, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 mt-4">
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!loading &&
          data.map((game) => <GameCard key={game.id} game={game}></GameCard>)}
      </div>
    </>
  );
}

export default GameGrid;
