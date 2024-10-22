import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string | null;
  search: string | null;
  page: number | null;
}


const useGames = (
  gameQuery: GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.order,
        search: gameQuery.search,
        page: gameQuery.page
      },
    },
    [gameQuery]
  );

export default useGames;
