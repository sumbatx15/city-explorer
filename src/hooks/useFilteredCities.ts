import { useMemo } from "react";
import { isMatch as _isMatch, getDistance } from "../utils";
import { useCities } from "./useCities";
import { useSearchParams } from "./useSearchParams";
import { useSelectedCity } from "./useSelectedCity";

export const useFilteredCities = () => {
  const { sort, search } = useSearchParams();

  const citiesQuery = useCities();
  const selectedCity = useSelectedCity();

  const isMatch = useMemo(() => _isMatch.bind(null, search), [search]);

  const filteredCities = useMemo(() => {
    switch (sort) {
      case "distance":
        if (!selectedCity) return [];
        return citiesQuery.data
          ?.slice()
          .filter((city) => city !== selectedCity)
          .sort(
            (a, b) =>
              getDistance(selectedCity.coords, a.coords) -
              getDistance(selectedCity.coords, b.coords)
          );

      case "name":
        return citiesQuery.data
          ?.slice()
          .filter(isMatch)
          .sort((a, b) => a.name.localeCompare(b.name));

      default:
        return citiesQuery.data?.slice().filter(isMatch);
    }
  }, [sort, selectedCity, citiesQuery.data, isMatch]);

  const emptyMessage = useMemo(() => {
    if (!selectedCity && sort === "distance") {
      return {
        title: "Awaiting City Search",
        description:
          "Enter a city in the search bar above to view distances to other cities (e.g. 'New York')",
      };
    }

    return {
      title: "No cities found",
      description: "Try searching for a different city",
    };
  }, [selectedCity, sort]);

  const hint = useMemo(() => {
    if (selectedCity && sort === "distance") {
      return `Showing cities sorted by distance from ${selectedCity.name}`;
    }

    if (filteredCities?.length && sort === "name") {
      return `Showing ${filteredCities.length} cities sorted by name`;
    }
  }, [filteredCities?.length, selectedCity, sort]);

  return {
    cities: filteredCities,
    query: citiesQuery,
    isEmpty: !filteredCities?.length,
    emptyMessage,
    hint,
  };
};
