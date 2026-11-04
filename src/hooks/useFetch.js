import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const request = async (url) => {
      try {
        setLoading(true);
        setError(false);

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Something went wrong on backend...");
        }

        const result = await res.json();
        console.log(result);

        setData(result);
      } catch (e) {
        setError(true);
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    };

    request(url);
  }, [url]);

  return [data, loading, error];
}
