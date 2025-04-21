import { Movie } from "./movie.type";

export type MoviesStore = {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
};
