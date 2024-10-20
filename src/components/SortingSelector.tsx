import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSort: string | null;
  handleSelect: (sortValue: string) => void;
}

function SortingSelector({ selectedSort, handleSelect }: Props) {
  const orderingValues = [
    "name",
    "released",
    "added",
    "created",
    "updated",
    "rating",
    "metacritic",
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedSort ? 'Order by : ' + selectedSort : 'Order by'}
      </MenuButton>
      <MenuList>
        {orderingValues.map((values) => (
          <MenuItem key={values} onClick={() => handleSelect(values)}>
            {values}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortingSelector;
