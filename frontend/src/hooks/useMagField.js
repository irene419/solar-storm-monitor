import { useState, useEffect } from "react";

const MAG_URL = "https://services.swpc.noaa.gov/json/rtsw/rtsw_mag_1m.json";

export function useMagField() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function fetchMag() {
      try {
        const response = await fetch(MAG_URL);
        if (!response.ok) throw new Error("Request failed");
        const json = await response.json();

        if (!Array.isArray(json) || json.length === 0) throw new Error("No data");

        let latestValid = null;
        for (let i = json.length - 1; i >= 0; i--) {
          const entry = json[i];
          const bz = entry.bz_gsm ?? entry.bz_gse ?? entry.bz;
          if (bz !== null && bz !== undefined) {
            latestValid = entry;
            break;
          }
        }

        if (!latestValid) throw new Error("No valid data found");

        const bz = latestValid.bz_gsm ?? latestValid.bz_gse ?? latestValid.bz;

        setData({
          bz: parseFloat(bz),
          bt: parseFloat(latestValid.bt),
        });
        setStatus("success");
      } catch (err) {
        setStatus("error");
      }
    }
    fetchMag();
  }, []);

  return { data, status };
}