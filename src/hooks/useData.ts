import api from "../services/api";
import { AxiosRequestConfig, CanceledError } from "axios";
import { FetchRespone } from "../types/global";
import { useEffect, useState } from "react";

const useData = <DataType>(
  service: string,
  requestConf?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [data, setData] = useState<DataType[]>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    api
      .get<FetchRespone<DataType>>(service, {
        signal: controller.signal,
        ...requestConf,
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
        setError('');
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        if (err.respone) {
          console.log(err.respone.data);
        } else if (err.request) {
          console.log(err.request);
        }

        setError(err.message);
        setLoading(false);
        console.log(err.config);
      });

    return () => {
      controller.abort();
    };
  }, deps ?? []);

  return { data, error, isLoading };
};

export default useData;
