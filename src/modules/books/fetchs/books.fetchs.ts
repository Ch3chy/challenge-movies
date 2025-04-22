import axiosInstance from "@/base/utils/axios.utils";
import { Book } from "../types/books.type";
import { camelizeKeys } from "humps";

export const fetchBooks = async (): Promise<Book[]> => {
  return axiosInstance
    .get<{ docs: Book[] }>("/search.json?q=colombia&page=1&limit=2000")
    .then((response) => {
      return camelizeKeys(response.data.docs) as Book[];
    });
};
