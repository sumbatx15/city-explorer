import {
  Box,
  Container,
  Divider,
  Grid,
  HStack,
  Heading,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { TbMapSearch } from "react-icons/tb";
import { CityCard } from "../components/CityCard";
import { EmptyMessage } from "../components/EmptyMessage";
import { SortPicker } from "../components/SortPicker";
import { TemperaturePicker } from "../components/TemperaturePicker";
import { useFilteredCities } from "../hooks/useFilteredCities";
import { useSearch } from "../hooks/useSearch";

export const Main: FC = () => {
  const { cities, isEmpty, query, emptyMessage, hint } = useFilteredCities();
  const search = useSearch();

  return (
    <>
      {query.isLoading && <p>Loading...</p>}
      {query.isError && <p>Error: {query.error.message}</p>}
      {query.isSuccess && (
        <Box>
          <Container
            display="flex"
            flexDir="column"
            alignItems="center"
            gap="4"
            p="4"
            maxW="container.sm"
          >
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
          </Container>
          <Box flex="1">
            <Container
              display="flex"
              flexDir="column"
              gap="4"
              pb="10"
              maxW="container.xl"
            >
              <HStack
                w="full"
                divider={<Divider orientation="vertical" h="7" />}
              >
                <SortPicker />
                <TemperaturePicker />
              </HStack>
              {hint && <Text fontWeight="semibold">{hint}</Text>}

              {isEmpty ? (
                <EmptyMessage {...emptyMessage} w="full" alignSelf="center" />
              ) : (
                <Grid
                  w="full"
                  gap="4"
                  gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr) )"
                >
                  {cities?.map((city) => (
                    <CityCard
                      key={city.country + city.name}
                      city={city}
                      transition="transform 0.1s"
                      _hover={{
                        transform: "scale(1.02)",
                      }}
                    />
                  ))}
                </Grid>
              )}
            </Container>
          </Box>
        </Box>
      )}
    </>
  );
};
