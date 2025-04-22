import { FC } from "react";
import styles from "./book-list.module.scss";
import { useBooksStore } from "../../stores/useBooksStore";
import Book from "../../components/book";

const BookList: FC = () => {
  const books = useBooksStore((state) => state.books);

  return (
    <div className={styles.bookList}>
      {books.map((book, index) => (
        <Book key={`book-${index}-${book.coverEditionKey}`} book={book} />
      ))}
    </div>
  );
};

export default BookList;
