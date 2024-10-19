import { Switch, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="flex gap-2">
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <label className="text-nowrap">{colorMode === 'dark'? 'Light Mode' : 'Dark mode'}</label>
    </div>
  );
}

export default ColorModeSwitch;
