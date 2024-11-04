// context/ThemeContext.js
"use client";

import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebaseConfig";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [projectDetails, setProjectDetails] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe(); // Clean up subscription on unmount
  }, []);

  console.log(currentUser);

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, projectDetails, setProjectDetails }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
