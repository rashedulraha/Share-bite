import axios from "axios";
import React, { useEffect, useState } from "react";

const useAxios = (url) => {
  const [foodCardData, setFoodCardData] = useState(null);
  const [error, setError] = useState(null);
  const [dataFetchLoading, setDataFetchLoading] = useState(true);

  // Fetching side effect

  useEffect(() => {
    setDataFetchLoading(true);
    axios(url)
      .then((res) => setFoodCardData(res.data))
      .catch((error) => setError(error.message))
      .finally(() => setDataFetchLoading(false));
  }, [url]);

  return { foodCardData, error, dataFetchLoading };
};

export default useAxios;
