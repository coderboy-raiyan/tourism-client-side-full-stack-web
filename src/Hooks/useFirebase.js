import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initializeAuth from "./../components/Firebase/Firebase.init";

initializeAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [userData, setUserData] = useState({});
  const auth = getAuth();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
        console.log("looged in", user);
      } else {
        setUserData({});
      }
      setIsLoading(false);
    });
  }, []);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUserData({});
        Swal.fire("Successfully log out");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    googleSignIn,
    userData,
    logout,
    isLoading,
    error,
    setError,
  };
};

export default useFirebase;
