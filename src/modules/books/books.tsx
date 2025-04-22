import { FC } from "react";
import { useBooksStore } from "./stores/useBooksStore";

const Books: FC = () => {
  const books = useBooksStore((state) => state.books);

  return (
    <div>
      <h1>Modulo Libros: {books.length}</h1>
    </div>
  );
};

export default Books;
