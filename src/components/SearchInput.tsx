import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import useDelay from "../hooks/useDelay";

function SearchInput({ handleSearch }: { handleSearch: (search: string) => void }) {
  // State to track the immediate search input value
  const [searchTerm, setSearchTerm] = useState("");

  // Using the useDelay hook to delay the search input by 1 second
  const delayedSearchTerm = useDelay(searchTerm, 1000);

  // Trigger handleSearch when the delayed value changes
  useEffect(() => {
    handleSearch(delayedSearchTerm);
  }, [delayedSearchTerm]);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <CiSearch color="gray.300" />
      </InputLeftElement>
      <Input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        borderRadius={50}
        placeholder="Search games..."
      />
    </InputGroup>
  );
}

export default SearchInput;
