import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import {
  Movie,
  MovieDetails,
  MovieDetailsResponse,
  MovieResponse,
} from "../types/movieTypes";

const BASE_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

interface ApiGetConfig {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setData:
    | Dispatch<SetStateAction<MovieDetails | undefined>>
    | Dispatch<SetStateAction<Movie[] | undefined>>;
  setError: Dispatch<SetStateAction<string | undefined>>;
  setTotalCount?: Dispatch<SetStateAction<number | undefined>>;
  searchParams: { i?: string; s?: string; page?: number };
  decorator:
    | ((data: MovieDetailsResponse) => MovieDetails)
    | ((data: MovieResponse) => Movie);
}

const get = (config: ApiGetConfig) => {
  const {
    searchParams,
    setLoading,
    setData,
    setError,
    setTotalCount,
    decorator,
  } = config;

  if (!searchParams.i && !searchParams.s) {
    setError("Missing search params");
    return;
  }

  setLoading && setLoading(true);
  axios
    .get(BASE_URL, {
      params: searchParams,
    })
    .then((response) => {
      const error = response?.data?.Error;
      if (error) {
        setError(error);
      } else {
        const search = response?.data?.Search;
        if (search) {
          setTotalCount && setTotalCount(response?.data?.totalResults);
          //I had a problem with types for setData and decorators :(
          const decoratedData = search.map((res: any) => decorator(res));
          setData(decoratedData);
          setError(undefined);
        } else {
          const data = response?.data;
          //I had a problem with types for setData and decorators :(
          const decoratedData: any = decorator(data);
          setData(decoratedData);
          setError(undefined);
        }
      }
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      setError(error);
    });
};

const Api = { get };

export default Api;
