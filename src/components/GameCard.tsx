import { Card, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlattformIconList";
import getCroppedImageUrl from "../services/image-url";

function GameCard({ game }: { game: Game }) {
  const platforms = game.parent_platforms.map((object) => object.platform);
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <div className="flex flex-col gap-2 p-6">
        <h2 className="text-2xl font-semibold">{game.name}</h2>
        <div className="flex justify-between">
          <PlatformIconList platforms={platforms}></PlatformIconList>
          <div className="py-0.5 px-2 font-semibold text-green-200 rounded-md bg-opacity-20 bg-green-50">{game.metacritic}</div>
        </div>
      </div>
    </Card>
  );
}

export default GameCard;
