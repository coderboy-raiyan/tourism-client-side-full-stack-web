import { useEffect, useState } from "react";
import useNewAllSevices from "./useNewAllSevices";

const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [isdataLoading, setDataLoading] = useState(true);
  const { isNewAdded } = useNewAllSevices();

  useEffect(() => {
    setDataLoading(true);
    setTimeout(() => {
      setDataLoading(false);
    }, 4000);
  }, [isNewAdded]);

  useEffect(() => {
    setDataLoading(true);
    fetch("https://secure-lake-39134.herokuapp.com/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data))
      .finally(() => {
        // setDataLoading(false);
      });
  }, [isNewAdded]);

  return {
    places,
    isdataLoading,
  };
};

export default usePlaces;
