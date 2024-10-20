interface Props {
  platform: string | undefined;
  genre: string | undefined;
}

function DynamicHeader({ platform, genre }: Props) {
  return (
    <h1 className="text-5xl font-semibold">
      {platform && platform} {genre && genre} Games
    </h1>
  );
}

export default DynamicHeader;
