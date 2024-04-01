import {
  AspectRatio,
  HStack,
  Heading,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { useSearchParams } from "../hooks/useSearchParams";
import { City } from "../types";
import { DistanceBadge } from "./DistanceBadge";
import { WeatherBadge } from "./WeatherBadge";

type Props = {
  city: City;
};

export const CityCard: FC<Props & StackProps> = ({ city, ...props }) => {
  const { sort } = useSearchParams();
  
  return (
    <AspectRatio ratio={1}>
      <Stack
        {...props}
        shadow="2xl"
        rounded="xl"
        bg="white"
        _dark={{
          bg: "gray.600",
        }}
      >
        <HStack
          align="flex-end"
          w="full"
          flex="2"
          bgImage={city.image}
          bgSize="cover"
          p="4"
        >
          {sort === "distance" && <DistanceBadge coords={city.coords} />}
          <WeatherBadge coords={city.coords} />
        </HStack>

        <Stack flex="1" p="4">
          <HStack>
            <Heading size="lg">{city.name}</Heading>
            <Text color="gray.500">{city.country}</Text>
          </HStack>
          <Text fontSize="sm" noOfLines={2} title={city.description}>
            {city.description}
          </Text>
        </Stack>
      </Stack>
    </AspectRatio>
  );
};
