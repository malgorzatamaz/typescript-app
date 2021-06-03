import { useEffect, useState, useMemo } from "react";

import { Movie } from "../types/movieTypes";
import { movieDecorator } from "./decorators";
import Api from "./api";

const useMoviesSearch = (query: string | undefined, page: number = 1) => {
  const [data, setData] = useState<Movie[] | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState<number | undefined>();

  const pagesCount = useMemo(
    () => (totalCount ? totalCount / 10 : 1),
    [totalCount]
  );

  useEffect(() => {
    if (!query) return;
    if (query.length < 3) {
      setError("Enter at least 3 characters");
      return;
    }

    const searchParams = {
      s: query,
      page,
    };

    Api.get({
      searchParams,
      setData,
      setLoading,
      setError,
      setTotalCount,
      decorator: movieDecorator,
    });
  }, [query, page]);

  return { error, loading, data, totalCount, pagesCount };
};

export default useMoviesSearch;
