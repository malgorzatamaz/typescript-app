export interface Movie {
  id: string;
  image: string;
  title: string;
  year: number;
}

export interface MovieResponse {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: number;
}

export interface MovieDetailsResponse {
  Actors: string;
  Awards: string;
  Director: string;
  Genre: string;
  imdbRating: string;
  Plot: string;
  Poster: string;
  Released: string;
  Runtime: string;
  Title: string;
  Year: number;
}

export interface MovieDetails {
  actors: string;
  awards: string;
  director: string;
  genre: string;
  image: string;
  plot: string;
  rating: string;
  released: string;
  runtime: string;
  title: string;
  year: number;
}
