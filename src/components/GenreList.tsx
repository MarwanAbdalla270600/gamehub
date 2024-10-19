import { Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

function GenreList({
  selectedGenre,
  handleClick,
}: {
  selectedGenre: Genre | null;
  handleClick: (genre: Genre) => void;
}) {
  const { data, loading } = useGenres();
  return (
    <ul>
      {loading && <Spinner />}
      {!loading &&
        data.map((genre) => (
          <div className="flex items-center gap-2 mb-4" key={genre.slug}>
            <img
              className="w-8 h-8 rounded-md"
              src={genre.image_background}
            ></img>
            <a
              onClick={() => handleClick(genre)}
              className={`text-xl hover:underline hover:cursor-pointer ${
                selectedGenre?.slug === genre?.slug ? "font-bold" : ""
              }`}
            >
              {genre.name}
            </a>
          </div>
        ))}
    </ul>
  );
}

export default GenreList;
