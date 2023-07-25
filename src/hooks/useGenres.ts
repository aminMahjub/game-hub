import { AxiosError, CanceledError } from "axios";
import { useState, useEffect } from "react";
import api from "../services/api";

import { FetchGenres, Genres } from "../types/genres";

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    api.get<FetchGenres>("/genres", { signal: controller.signal })
        .then(res => {
            setGenres(res.data.results);
            setLoading(false);
        })
        .catch(err => {
            if (err instanceof CanceledError) return;

            if (err.respone) {
                console.log(err.respone.data);
            } else if (err.request) {
                console.log(err.request)
            }

            setLoading(false);
            setError(err.message)
            console.log(err.config)
        })

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;