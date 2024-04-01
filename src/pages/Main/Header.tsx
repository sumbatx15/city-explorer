import {
  HStack,
  Heading,
  Icon,
  Input,
  Stack,
  StackProps,
} from "@chakra-ui/react";
import { FC } from "react";
import { TbMapSearch } from "react-icons/tb";
import { useSearch } from "../../hooks/useSearch";

export const Header: FC<StackProps> = (props) => {
  const search = useSearch();

  return (
    <Stack gap="4" p="4" align="center" {...props}>
      <HStack align="center">
        <Icon as={TbMapSearch} boxSize="12" color="gray.500" />
        <Heading>City Explorer</Heading>
      </HStack>
      <Input
        rounded="xl"
        size="lg"
        defaultValue={search.defaultValue}
        value={search.search}
        onChange={(e) => search.setSearch(e.target.value)}
        placeholder="Search city"
        w="full"
      />
    </Stack>
  );
};
