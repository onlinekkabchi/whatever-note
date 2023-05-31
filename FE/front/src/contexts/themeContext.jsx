import { createContext, useState, useEffect } from "react";

export const ThemeStateContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("black-white--");

  return <ThemeContextProvider value={theme}>{children}</ThemeContextProvider>;
};
