import { Card, Skeleton, SkeletonText } from "@chakra-ui/react"

function GameCardSkeleton() {
    return <Card>
        <Skeleton height="200px"></Skeleton>
        <div className="flex flex-col gap-2 p-6">
        <SkeletonText></SkeletonText>
      </div>
    </Card>
}

export default GameCardSkeleton