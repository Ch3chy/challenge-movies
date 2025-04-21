import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./movies";

const MoviesRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
    </Routes>
  );
};

export default MoviesRoutes;
