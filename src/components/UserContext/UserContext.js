import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";
export const UserAuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unRegister = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unRegister();
  });
  const userInfo = { user };
  return (
    <UserAuthContext.Provider value={userInfo}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserContext;
