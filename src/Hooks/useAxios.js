import axios from "axios";
import React, { useEffect, useState } from "react";

const useAxios = (url, token) => {
  const [foodCardData, setFoodCardData] = useState(null);
  const [error, setError] = useState(null);
  const [dataFetchLoading, setDataFetchLoading] = useState(true);

  // Fetching side effect

  useEffect(() => {
    setDataFetchLoading(true);
    if (!url) return;

    axios(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setFoodCardData(res.data))
      .catch((error) => setError(error.message))
      .finally(() => setDataFetchLoading(false));
  }, [token, url]);

  return { foodCardData, error, dataFetchLoading };
};

export default useAxios;
