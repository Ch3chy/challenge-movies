import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { MoviesStore } from "../types/store.type";

export const useMoviesStore = create<MoviesStore>()(
  persist(
    (set) => ({
      movies: [],
      setMovies: (movies) => set({ movies }),
    }),
    {
      name: "movies-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
