import React from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
export const UserAuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const user = { name: "Muhib" };
  const userInfo = { user };
  return (
    <UserAuthContext.Provider value={userInfo}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserContext;
