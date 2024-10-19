import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar({ handeSearch }: { handeSearch: (search: string) => void }) {
  return (
    <div className="flex items-center w-full gap-4">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput handleSearch={(search) => handeSearch(search)}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </div>
  );
}

export default NavBar;
