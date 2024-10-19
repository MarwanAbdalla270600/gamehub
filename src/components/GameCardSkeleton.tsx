import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Skeleton height="300px"></Skeleton>
      <div className="flex flex-col gap-2 p-6">
        <SkeletonText></SkeletonText>
      </div>
    </Card>
  );
}

export default GameCardSkeleton;
