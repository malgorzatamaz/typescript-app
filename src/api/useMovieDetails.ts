import { useEffect, useState } from "react";

import { MovieDetails } from "../types/movieTypes";
import { movieDetailsDecorator } from "api/decorators";
import Api from "./api";

const useMoviesDetails = (id: string) => {
  const [data, setData] = useState<MovieDetails | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchParams = {
      i: id,
    };

    Api.get({
      searchParams,
      setData,
      setLoading,
      setError,
      decorator: movieDetailsDecorator,
    });
  }, [id]);

  return { error, loading, data };
};

export default useMoviesDetails;
