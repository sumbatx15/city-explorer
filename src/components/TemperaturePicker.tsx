import {
  Button,
  ButtonProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FC } from "react";
import { useSearchParams } from "../hooks/useSearchParams";

export const TemperaturePicker: FC<ButtonProps> = (props) => {
  const searchParams = useSearchParams();

  return (
    <Menu>
      <MenuButton as={Button} size="sm" {...props}>
        Temp: {"°" + searchParams.temp}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => searchParams.set("temp", "c")}>
          Celsius
        </MenuItem>
        <MenuItem onClick={() => searchParams.set("temp", "f")}>
          Fahrenheit
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
