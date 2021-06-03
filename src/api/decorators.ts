import {
  Movie,
  MovieDetails,
  MovieDetailsResponse,
  MovieResponse,
} from "types/movieTypes";

export const movieDecorator = (movie: MovieResponse): Movie => {
  return {
    title: movie.Title,
    image: movie.Poster,
    year: movie.Year,
    id: movie.imdbID,
  };
};

export const movieDetailsDecorator = (
  movie: MovieDetailsResponse
): MovieDetails => {
  return {
    title: movie.Title,
    image: movie.Poster,
    year: movie.Year,
    actors: movie.Actors,
    awards: movie.Awards,
    director: movie.Director,
    genre: movie.Genre,
    plot: movie.Plot,
    released: movie.Released,
    runtime: movie.Runtime,
    rating: movie.imdbRating,
  };
};
