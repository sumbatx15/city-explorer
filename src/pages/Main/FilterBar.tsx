import { Divider, HStack, StackProps } from "@chakra-ui/react";
import { FC } from "react";
import { SortPicker } from "../../components/SortPicker";
import { TemperaturePicker } from "../../components/TemperaturePicker";

export const FilterBar: FC<StackProps> = (props) => {
  return (
    <HStack
      w="full"
      divider={<Divider orientation="vertical" h="7" />}
      {...props}
    >
      <SortPicker />
      <TemperaturePicker />
    </HStack>
  );
};
