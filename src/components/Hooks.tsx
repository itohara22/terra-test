import { useEffect, useState } from "react";
import { FetchDataType } from "./types";

type FetchingState = "ideal" | "error" | "success" | "loading";

export default function useFetchData() {
  const [fetchingState, setFetchingState] = useState<FetchingState>("ideal");
  const [data, setData] = useState<FetchDataType>();

  useEffect(() => {
    async function fetchData() {
      setFetchingState("loading");

      try {
        const res = await fetch(
          "https://terra-staging.letsterra.com/mvp5/getSpinwheelOptions?username=enigmaobby_1718347466",
        );

        if (!res.ok) {
          throw new Error("cant fetch");
        }

        const resData = await res.json();
        if (!resData) {
          throw new Error("soemthign went wrong");
        }
        setData(resData);
        setFetchingState("success");
      } catch (err) {
        setFetchingState("error");
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return { data, fetchingState };
}
