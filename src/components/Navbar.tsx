import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <div className="flex items-center gap-2">
      <Image src={logo} boxSize="60px"></Image>
      Navbar
    </div>
  );
}

export default NavBar;
