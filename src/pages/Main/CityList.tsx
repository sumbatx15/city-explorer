import { Grid, GridProps } from "@chakra-ui/react";
import { FC } from "react";
import { CityCard } from "../../components/CityCard";
import { City } from "../../types";

type Props = {
  cities: City[];
};

export const CityList: FC<Props & GridProps> = ({ cities, ...props }) => {
  return (
    <Grid
      w="full"
      gap="4"
      gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr) )"
      {...props}
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
  );
};
