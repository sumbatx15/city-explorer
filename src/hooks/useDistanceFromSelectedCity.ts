import { City } from "../types";
import { getDistance } from "../utils";
import { useSelectedCity } from "./useSelectedCity";

const formmater = new Intl.NumberFormat("en-US", {
  style: "decimal",
  useGrouping: true,
  maximumFractionDigits: 2,
});

export const useDistanceFromSelectedCity = (city: City["coords"]) => {
  const selectedCity = useSelectedCity();
  if (!selectedCity) return null;
  return formmater.format(getDistance(selectedCity.coords, city));
};
