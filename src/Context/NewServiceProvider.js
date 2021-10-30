import React, { createContext } from "react";
import useNewService from "./../Hooks/useNewService";

export const NewServiceContext = createContext();

const NewServiceProvider = ({ children }) => {
  const allServices = useNewService();
  return (
    <NewServiceContext.Provider value={allServices}>
      {children}
    </NewServiceContext.Provider>
  );
};

export default NewServiceProvider;
