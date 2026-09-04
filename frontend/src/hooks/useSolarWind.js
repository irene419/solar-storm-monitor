import { useState, useEffect } from "react";

const WIND_URL = "https://services.swpc.noaa.gov/json/rtsw/rtsw_wind_1m.json";

export function useSolarWind() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function fetchWind() {
      try {
        const response = await fetch(WIND_URL);
        if (!response.ok) throw new Error("Request failed");
        const json = await response.json();

        if (!Array.isArray(json) || json.length === 0) throw new Error("No data");

        let latestValid = null;
        for (let i = 0; i < json.length; i++) {
          const entry = json[i];
          if (entry.proton_speed !== null && entry.proton_speed !== undefined) {
            latestValid = entry;
            break;
          }
        }

        if (!latestValid) throw new Error("No valid data found");

        setData({
          speed: parseFloat(latestValid.proton_speed),
          density: parseFloat(latestValid.proton_density),
        });
        setStatus("success");
      } catch (err) {
        setStatus("error");
      }
    }
    fetchWind();
  }, []);

  return { data, status };
}