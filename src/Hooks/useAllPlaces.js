import { useContext } from "react";
import { PlaceContext } from "./../Context/PlaceProvider";

const useAllPlaces = () => {
  return useContext(PlaceContext);
};

export default useAllPlaces;
