import { useQuery } from "@tanstack/react-query";
import { getCities } from "../service/cities";

export const useCities = () => {
  return useQuery({
    queryKey: ["cities"],
    queryFn: () => getCities(),
  });
};
