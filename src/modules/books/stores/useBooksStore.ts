import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { BooksStore } from "../types/store.type";

export const useBooksStore = create<BooksStore>()(
  persist(
    (set) => ({
      books: [],
      setBooks: (books) => set({ books }),
    }),
    {
      name: "books-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
