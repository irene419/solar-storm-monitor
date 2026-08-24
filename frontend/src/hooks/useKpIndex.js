import { useState, useEffect } from "react";

const KP_API_URL = "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json";

export function useKpIndex() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    async function fetchKp() {
      try {
        const response = await fetch(KP_API_URL);
        if (!response.ok) throw new Error("Request failed");
        const json = await response.json();
        setData(json);
        setStatus("success");
      } catch (err) {
        setStatus("error");
      }
    }
    fetchKp();
  }, []);

  return { data, status };
}