import { HStack, Icon, Text } from "@chakra-ui/react";
import { FC } from "react";
import { LuRuler } from "react-icons/lu";
import { useDistanceFromSelectedCity } from "../hooks/useDistanceFromSelectedCity";
import { City } from "../types";

export const DistanceBadge: FC<{ coords: City["coords"] }> = ({ coords }) => {
  const distance = useDistanceFromSelectedCity(coords);
  if (distance === null) return null;

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
    >
      <Icon as={LuRuler} boxSize="5" />
      <Text>{distance} km</Text>
    </HStack>
  );
};
