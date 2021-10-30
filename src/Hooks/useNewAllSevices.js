import { useContext } from "react";
import { NewServiceContext } from "../Context/NewServiceProvider";

const useNewAllSevices = () => {
  return useContext(NewServiceContext);
};
export default useNewAllSevices;
