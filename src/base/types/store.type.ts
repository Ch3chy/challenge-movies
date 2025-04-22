export type BaseStore = {
  user?: string;
  token?: string;
  isAuthenticated: () => boolean;
  setUser: (user: string) => void;
  setToken: (token: string) => void;
  logout: () => void;
};
