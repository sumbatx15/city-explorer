import { useSearchParams as useReactRouterSearchParams } from "react-router-dom";

type SearchParams = {
  search: string;
  sort: "name" | "distance" | "";
  temp: "c" | "f";
};
export const useSearchParams = () => {
  const [searchParams, setSearchParams] = useReactRouterSearchParams();

  const set = <T extends keyof SearchParams>(
    key: T,
    value: SearchParams[T]
  ) => {
    setSearchParams((params) => {
      if (!value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      return params;
    });
  };

  const get = <T extends keyof SearchParams>(key: T): SearchParams[T] =>
    (searchParams.get(key) || "") as SearchParams[T];

  return {
    search: get("search"),
    sort: get("sort"),
    temp: get("temp") || "c",
    set,
    get,
  };
};
