import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../service/weather";
import { City } from "../types";

export const useWeather = (coords: City["coords"]) => {
  return useQuery({
    queryKey: ["temperature", coords.lat, coords.lng],
    queryFn: () => getWeather(coords),
  });
};
