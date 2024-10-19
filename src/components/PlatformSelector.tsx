import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform, { Platform } from "../hooks/usePlatform";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

interface Props {
  selectedPlatform: Platform | null;
  handleSelect: (platform: Platform) => void;
}

function PlatformSelector({selectedPlatform, handleSelect}: Props) {
  const { data, error } = usePlatform();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.slug}
            onClick={() => handleSelect(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
