import useData from "./useData";

import { Platforms } from "../types/platforms";
import { AxiosRequestConfig } from "axios";

const usePlatforms = (requestConf?: AxiosRequestConfig, deps?: unknown[]) => useData<Platforms>('/platforms', requestConf, deps);

export default usePlatforms;
