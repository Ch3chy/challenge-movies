import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Books from "./books";

const BooksRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
    </Routes>
  );
};

export default BooksRoutes;
