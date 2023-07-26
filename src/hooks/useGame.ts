import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import api from "../services/api";
import { AxiosRequestConfig } from "axios";
import { Game, FetchGames } from "../types/games";

const useGame = (requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    api
      .get<FetchGames>("/games", { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })  
      .catch((error) => {
        if (error instanceof CanceledError) return;

        if (error.respone) {
          console.log(error.respone.data);
        } else if (error.request) {
          console.log(error.request);
        }

        setError(error.message);
        setLoading(false);
        console.log(error.config);
      });

    return () => controller.abort();
  }, deps ?? []);

  return { games, error, isLoading };
};

export default useGame;
