import { useState, useEffect } from "react";

function getDateNDaysAgo(n) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  return date.toISOString().split("T")[0];
}

const startDate = getDateNDaysAgo(7);
const endDate = getDateNDaysAgo(0);
const CME_API_URL = `https://api.nasa.gov/DONKI/CME?startDate=${startDate}&endDate=${endDate}&api_key=DEMO_KEY`;

export function useCmeEvents() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function fetchCme() {
      try {
        const response = await fetch(CME_API_URL);
        if (!response.ok) throw new Error("Request failed");
        const json = await response.json();
        setData(json);
        setStatus("success");
      } catch (err) {
        setStatus("error");
      }
    }
    fetchCme();
  }, []);

  return { data, status };
}