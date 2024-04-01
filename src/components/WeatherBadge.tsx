import { HStack, Img, Text } from "@chakra-ui/react";
import { FC } from "react";

import { useSearchParams } from "../hooks/useSearchParams";
import { useWeather } from "../hooks/useWeather";
import { City } from "../types";

export const WeatherBadge: FC<{ coords: City["coords"] }> = ({ coords }) => {
  const weather = useWeather(coords);
  const searchParams = useSearchParams();
  const temp = searchParams.temp || "c";

  const isCelsius = temp === "c";
  if (!weather.isSuccess) return null;

  const temperature = isCelsius
    ? `${weather.data?.current.temp_c}°${temp}`
    : `${weather.data?.current.temp_f}°${temp}`;

  return (
    <HStack
      bg="white"
      color="black"
      rounded="md"
      align="center"
      px="2"
      py="0.5"
      fontSize="sm"
      fontWeight="semibold"
      title={weather.data?.current.condition.text}
    >
      <Img src={weather.data?.current.condition.icon} boxSize="5" />
      <Text>{temperature}</Text>
    </HStack>
  );
};
