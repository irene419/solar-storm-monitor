import { useState, useEffect } from "react";

export function useSunspotNumber() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("https://www.sidc.be/SILSO/INFO/snmtotcsv.php")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.trim().split("\n");
        const last = lines[lines.length - 1].split(";");
        setData(parseFloat(last[4]));
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  return { data, status };
}