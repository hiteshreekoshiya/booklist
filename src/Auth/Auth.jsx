// react
import React, { useEffect, useState } from "react";

// firebase
import {auth} from "../firebase";

// css
import './loader.css'

// context
export const AuthContext = React.createContext();

/**
 * Auth Provider Component
 */
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <><div className="loader"></div></>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};