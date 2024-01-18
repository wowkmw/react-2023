import { useState, useEffect } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return data;
};

export default useFetchData;
