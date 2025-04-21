import { FC } from "react";
import { useMoviesStore } from "./stores/useMoviesStore";

const Movies: FC = () => {
  const movies = useMoviesStore((state) => state.movies);

  return (
    <div>
      <h1>Modulo Peliculas: {movies.length}</h1>
    </div>
  );
};

export default Movies;
