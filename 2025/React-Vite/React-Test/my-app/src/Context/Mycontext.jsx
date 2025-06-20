import { createContext } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const GlobalName = "Rahul";
  const GlobalCountry = "India";

  return (
    <MyContext.Provider value={{ GlobalName, GlobalCountry }}>
      {children}
    </MyContext.Provider>
  );
};
