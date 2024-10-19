import { Card, CardBody, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlattformIconList";

function GameCard({ game }: { game: Game }) {
  const platforms = game.parent_platforms.map(object => object.platform)
  return (
    <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image}></Image>
        <div className="flex flex-col gap-2 p-6">
            <h2 className="text-2xl font-semibold">{game.name}</h2>
            <PlatformIconList platforms={platforms}></PlatformIconList>
        </div>
    </Card>
  );
}

export default GameCard;
