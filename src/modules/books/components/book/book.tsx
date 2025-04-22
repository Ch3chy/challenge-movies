import { FC } from "react";
import { BookProps } from "./book.types";
import styles from "./book.module.scss";

const Book: FC<BookProps> = ({ book, className, style }) => {
  const cover = book.coverI
    ? `https://covers.openlibrary.org/b/id/${book.coverI}-M.jpg`
    : "https://placehold.co/180x280?text=Sin+imagen";
  return (
    <div className={`${styles.book} ${className || ""} bookItem`} style={style}>
      <img src={cover} alt={book.title} className={styles.bookCover} />
      <div className={styles.bookInfo}>
        <h3 className={styles.bookTitle}>{book.title}</h3>
        <p className={styles.bookAuthor}>{book.authorName?.[0]}</p>
        <p className={styles.bookYear}>{book.firstPublishYear}</p>
      </div>
    </div>
  );
};

export default Book;
