import { FC, useEffect } from "react";
import { useBooksStore } from "./stores/useBooksStore";
import { fetchBooks } from "./fetchs/books.fetchs";
import Title from "@/base/components/title";
import BookList from "./views/book-list";
import styles from "./books.module.scss";

const Books: FC = () => {
  const books = useBooksStore((state) => state.books);
  const setBooks = useBooksStore((state) => state.setBooks);

  const loadBooks = async () => {
    const books = await fetchBooks();
    setBooks(books);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <section className={styles.books}>
      <div className={styles.booksHeader}>
        <Title>Libros</Title>
        <p>{books.length} items</p>
      </div>
      <BookList />
    </section>
  );
};

export default Books;
