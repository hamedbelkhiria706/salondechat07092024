import React, { useEffect,createContext, useContext, useState } from 'react';
//import { auth } from './firebase';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   // const unsubscribe = auth.onAuthStateChanged(user => {
    
        setUser(user);
        setLoading(false);
   // });

    return () => {
      setUser(user);
        setLoading(false);
    };
}, []);

const logIn = (userData) => {
    setUser(userData); // Set user on login
};

const logOut = () => {
    setUser(null); // Clear user on logout
};

const value = { user, logIn, logOut,loggedIn,setLoggedIn }; 
  return (
    <AuthContext.Provider value={{ value }}>
       {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);