import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatform";

function PlatformIconList({ platforms }: { platforms: Platform[] }) {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    linux: FaLinux,
    mac: FaApple,
    android: FaAndroid,
    phone: MdPhone,
    nintendo: SiNintendoswitch,
    web: BsGlobe,
  };

  return (
    <div className="flex gap-2">
      {platforms.map((platform) => (
        <Icon key={platform.slug} boxSize={6} as={iconMap[platform.slug]} color='gray.500'></Icon>
      ))}
    </div>
  );
}

export default PlatformIconList;
