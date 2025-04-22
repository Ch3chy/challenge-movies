import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { BaseStore } from "../types/store.type";

export const useBaseStore = create<BaseStore>()(
  persist(
    (set, get) => ({
      user: undefined,
      token: undefined,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      isAuthenticated: () => {
        const { user, token } = get();
        return !!user && !!token;
      },
      logout: () => set({ user: undefined, token: undefined }),
    }),
    {
      name: "base-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
