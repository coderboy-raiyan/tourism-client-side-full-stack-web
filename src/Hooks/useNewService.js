import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const useNewService = () => {
  const [isNewAdded, setIsNewAdded] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  // Add a new service

  const onSubmit = (data) => {
    fetch("https://secure-lake-39134.herokuapp.com/place", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your service has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsNewAdded(data);
        }
      })
      .finally(() => {
        setIsNewAdded(false);
      });
    reset();
  };

  return {
    isNewAdded,
    register,
    handleSubmit,
    onSubmit,
  };
};

export default useNewService;
