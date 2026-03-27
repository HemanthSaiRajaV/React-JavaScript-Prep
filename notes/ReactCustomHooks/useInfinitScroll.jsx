import { useEffect, useState } from "react";

function useInfiniteScroll(fetchData) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (bottom && !loading) {
        setPage(prev => prev + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    async function load() {
      setLoading(true);
      await fetchData(page); // API call
      setLoading(false);
    }

    load();
  }, [page]);

  return { page, loading };
}

export default useInfiniteScroll;