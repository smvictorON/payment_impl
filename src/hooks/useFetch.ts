import { useState, useEffect } from 'react';

function useFetch(url?: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(!!url);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();

        setTimeout(() => {
          setData(result);
        }, 1000);
      } catch (err: any) {
        setError(new Error(err.message));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
