import { FC, CSSProperties } from "react";
import { List, AutoSizer } from "react-virtualized";
import styles from "./book-list.module.scss";
import { useBooksStore } from "../../stores/useBooksStore";
import Book from "../../components/book";
import { useResponsiveRowHeight } from "../../hooks/book-list.hooks";

const BookList: FC = () => {
  const books = useBooksStore((state) => state.books);
  const rowHeight = useResponsiveRowHeight();

  const rowRenderer = ({
    key,
    index,
    style,
  }: {
    key: string;
    index: number;
    style: CSSProperties;
  }) => {
    const book = books[index];

    return (
      <div key={key} style={style}>
        <Book book={book} className={index % 2 === 0 ? styles.bookItem : ""} />
      </div>
    );
  };

  return (
    <div className={styles.bookList}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width}
            height={height}
            rowCount={books.length}
            rowHeight={rowHeight}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default BookList;
