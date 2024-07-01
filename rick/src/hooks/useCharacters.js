import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
export default function useCharacter(url,query) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${url}=${query}`,
          { signal: signal }
        );
        setCharacters(data.results.slice(0, 6));
      } catch (error) {
        if (!axios.isCancel()) {
          setCharacters([]);
          toast.error(error.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
    return () => {
      controller.abort();
    };
  }, [query]);
  return { characters, isLoading };
}
