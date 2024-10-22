import useGames, { GameQuery } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  if (error) return <p>{error}</p>;
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
      {loading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {!loading &&
        data.map((game) => <GameCard key={game.id} game={game}></GameCard>)}
    </div>
  );
}

export default GameGrid;
