import axios from "axios";
import { useBaseStore } from "../stores/useBaseStore";

const axiosInstance = axios.create({
  baseURL: "https://openlibrary.org",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = useBaseStore.getState().token;
    if (token) {
      // AQUI AGREGO EL TOKEN A TODOS LOS REQUEST QUE SALGAN POR AXIOS. LA API DE LIBROS ME PONE PROBLEMA POR ENVIAR ESTE HEADER QUE NO SE NECESITA
      // config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
