import { Book } from "./books.type";

export type BooksStore = {
  books: Book[];
  setBooks: (books: Book[]) => void;
};
