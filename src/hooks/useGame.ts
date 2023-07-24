import axios, { CanceledError } from "axios";
import { useState, useEffect } from "react";
import api from "../services/api";

export interface Game {
  id: number;
  name: string;
  background_image: string,
}

interface FetchGames {
  count: number;
  results: Game[];
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    api
      .get<FetchGames>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;

        if (error.respone) {
          console.log(error.respone.data);
        } else if (error.request) {
          console.log(error.request);
        }

        setError(error.message);
        console.log(error.config);
      });

    return () => controller.abort();
  });

  return {games, error}
};

export default useGame;
