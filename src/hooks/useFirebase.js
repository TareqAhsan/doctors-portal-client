import { useEffect, useState } from "react";
import initializefirebase from "../Pages/Login/Login/Firebase/firebaseinit";
import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  updateProfile,
  getIdToken,
} from "firebase/auth";

initializefirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState();
  const [admin, setIsadmin] = useState(false);
  const [token, setToken] = useState("");
  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();

  const register = (email, password, name, history) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUsers(email, name);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        history.push("/");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const loginUser = (email, password, location, history) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const redirect = location?.state?.from || "/";
        history.push(redirect);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const googlesignin = (location, history) => {
    setIsloading(true);
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const user = result.user;
        console.log(result);
        saveUsersForGoogle(user.email, user.displayName);
        const redirect = location?.state?.from || "/";
        history.push(redirect);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => setToken(idToken));
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, []);

  // check admin api
  useEffect(() => {
    axios(
      `https://fast-everglades-35128.herokuapp.com/users/${user.email}`
    ).then((result) => {
      setIsadmin(result.data.admin);
      //  console.log(result.data.admin);
    });
  }, [user.email]);

  const saveUsers = (email, displayName) => {
    const users = { email, displayName };
    axios
      .post("https://fast-everglades-35128.herokuapp.com/users", users)
      .then((result) => console.log(result.data));
  };
  const saveUsersForGoogle = (email, displayName) => {
    const users = { email, displayName };
    axios
      .put("https://fast-everglades-35128.herokuapp.com/users", users)
      .then((result) => console.log(result.data));
  };

  return {
    user,
    register,
    logout,
    loginUser,
    isloading,
    error,
    googlesignin,
    admin,
    token,
  };
};

export default useFirebase;
