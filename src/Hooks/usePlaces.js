import { useEffect, useState } from "react";

const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [isdataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    setDataLoading(true);
    setTimeout(() => {
      setDataLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setDataLoading(true);
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data))
      .finally(() => {
        setDataLoading(false);
      });
  }, []);

  return {
    places,
    isdataLoading,
  };
};

export default usePlaces;
