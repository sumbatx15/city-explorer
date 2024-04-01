import { isMatch } from "../utils";
import { useCities } from "./useCities";
import { useSearchParams } from "./useSearchParams";

export const useSelectedCity = () => {
  const { search } = useSearchParams();
  const cities = useCities();

  if (!search) return null;

  return cities.data?.find(isMatch.bind(null, search));
};
