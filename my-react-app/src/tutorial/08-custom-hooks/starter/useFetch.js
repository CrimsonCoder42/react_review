import { useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const checkUser = async (data) => {
    try {
      const resp = await fetch(data);

      if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
      
      const data = await resp.json();


    }
  }
  return {show, toggle};

};

export default useFetch;