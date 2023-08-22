import useData from "./useData";

import { Game } from "../types/games";
import { AxiosRequestConfig } from "axios";

const useGames = (requestConf?: AxiosRequestConfig, deps?: unknown[]) => useData<Game>('/games', requestConf, deps);

export default useGames;
