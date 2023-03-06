import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [ispending, setispending] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const abortcont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortcont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setdata(data);
          setispending(false);
          seterror(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch Aborted");
          } else {
            setispending(false);
            seterror(err.message);
          }
          //auto catches network/connection error
        });
    });

    return () => abortcont.abort();
  }, [url]);
  return { data, ispending, error };
};

export default useFetch;
