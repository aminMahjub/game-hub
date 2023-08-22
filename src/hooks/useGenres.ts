import { FetchGenres } from "../types/genres";
import api from "../services/api";
import { AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";

const useGenres = (requestConf?: AxiosRequestConfig, deps?: unknown[]) => {
  const fetchGenres = () => {
    return api.get<FetchGenres>('/genres', requestConf).then(res => res.data);
  }

  return useQuery<FetchGenres, Error>({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 // 24hr
  });
  
}
export default useGenres;