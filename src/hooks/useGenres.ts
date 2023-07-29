import useData from "./useData";

import { Genre } from "../types/genres";
import { AxiosRequestConfig } from "axios";

const useGenres = (requestConf?: AxiosRequestConfig, deps?: unknown[]) => useData<Genre>('/genres', requestConf, deps);

export default useGenres;