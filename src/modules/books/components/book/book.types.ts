import { CSSProperties } from "react";
import { Book } from "../../types/books.type";

export interface BookProps {
  book: Book;
  className?: string;
  style?: CSSProperties;
}
