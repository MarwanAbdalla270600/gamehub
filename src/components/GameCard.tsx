import { Card, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";
import { Game } from "../hooks/useGames";
import noImage from "../assets/no-image.webp";

function GameCard({ game }: { game: Game }) {
  const platforms = game.parent_platforms.map((object) => object.platform);
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image
        src={
          game.background_image
            ? getCroppedImageUrl(game.background_image)
            : noImage
        }
      ></Image>
      <div className="flex flex-col gap-2 p-6">
        <div className="flex justify-between">
          <PlatformIconList platforms={platforms}></PlatformIconList>
          {game.metacritic && (
            <div className="py-0.5 px-2 font-semibold text-green-200 rounded-md bg-opacity-20 bg-green-50">
              {game.metacritic}
            </div>
          )}
        </div>
        <h2 className="text-2xl font-semibold">{game.name}</h2>
      </div>
    </Card>
  );
}

export default GameCard;
