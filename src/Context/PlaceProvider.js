import React, { createContext } from "react";
import usePlaces from "./../Hooks/usePlaces";

export const PlaceContext = createContext();

const PlaceProvider = ({ children }) => {
  const alldata = usePlaces();
  return (
    <PlaceContext.Provider value={alldata}>{children}</PlaceContext.Provider>
  );
};

export default PlaceProvider;
