import {
  Button,
  ButtonProps,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FilterRemove } from "iconsax-react";
import { FC } from "react";
import { useSearchParams } from "../hooks/useSearchParams";

export const SortPicker: FC<ButtonProps> = (props) => {
  const searchParams = useSearchParams();

  return (
    <Menu>
      <HStack>
        <MenuButton as={Button} size="sm">
          Sort by {searchParams.sort}
        </MenuButton>
        {searchParams.sort && (
          <IconButton
            size="sm"
            icon={<Icon boxSize="4" as={FilterRemove} variant="Bulk" />}
            onClick={() => searchParams.set("sort", "")}
            aria-label="Clear sort"
            {...props}
          />
        )}
      </HStack>
      <MenuList>
        <MenuItem onClick={() => searchParams.set("sort", "name")}>
          Name
        </MenuItem>
        <MenuItem onClick={() => searchParams.set("sort", "distance")}>
          Distance
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
