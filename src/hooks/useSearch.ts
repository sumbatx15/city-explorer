import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import { useSearchParams } from "./useSearchParams";

export const useSearch = () => {
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.search);
  useDebounce(
    () => {
      if (search === searchParams.search) return;
      return searchParams.set("search", search);
    },
    500,
    [search]
  );

  useEffect(() => {
    setSearch((prev) => {
      if (prev === searchParams.search) return prev;
      return searchParams.search;
    });
  }, [searchParams.search]);

  return {
    defaultValue: searchParams.search,
    search: search || undefined,
    setSearch,
  };
};
