import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

function GameCard({ game }: { game: Game }) {
  return (
    <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image}></Image>
        <CardBody>
            <h2 className="text-2xl font-semibold">{game.name}</h2>
        </CardBody>
    </Card>
  );
}

export default GameCard;
