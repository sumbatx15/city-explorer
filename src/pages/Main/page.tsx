import { Box, Container, Text } from "@chakra-ui/react";
import { FC } from "react";
import { EmptyMessage } from "../../components/EmptyMessage";
import { useFilteredCities } from "../../hooks/useFilteredCities";
import { CityList } from "./CityList";
import { FilterBar } from "./FilterBar";
import { Header } from "./Header";

export const Main: FC = () => {
  const { cities, isEmpty, query, emptyMessage, hint } = useFilteredCities();

  if (query.isError) return <p>Error: {query.error.message}</p>;
  if (query.isLoading) return <p>Loading...</p>;

  return (
    <Box>
      <Container maxW="container.sm">
        <Header />
      </Container>
      <Box flex="1">
        <Container
          display="flex"
          flexDir="column"
          gap="4"
          pb="10"
          maxW="container.xl"
        >
          <FilterBar />
          {hint && <Text fontWeight="semibold">{hint}</Text>}
          {isEmpty ? (
            <EmptyMessage {...emptyMessage} w="full" alignSelf="center" />
          ) : (
            <CityList cities={cities!} />
          )}
        </Container>
      </Box>
    </Box>
  );
};
