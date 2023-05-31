import { createContext, useState, useEffect } from "react";

// Create the AuthContext
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const saveToken = (token) => {
    setToken(token);
    // localStorage.setItem("token", token); // Store the token in localStorage
  };

  // Function to remove the token
  const removeToken = () => {
    setToken(null);
    // localStorage.removeItem("token"); // Remove the token from localStorage
  };

  const isTokenExpired = () => {
    // Add your token expiration logic here
    // Return true if the token is expired, false otherwise
  };

  const contextValue = {
    token,
    saveToken,
    removeToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
