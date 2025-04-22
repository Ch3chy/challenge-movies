import { FC, useEffect } from "react";
import { useBooksStore } from "./stores/useBooksStore";
import { fetchBooks } from "./fetchs/books.fetchs";

const Books: FC = () => {
  const books = useBooksStore((state) => state.books);

  const loadBooks = async () => {
    const books = await fetchBooks();
    useBooksStore.setState({ books });
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <h1>Modulo Libros: {books.length}</h1>
    </div>
  );
};

export default Books;
