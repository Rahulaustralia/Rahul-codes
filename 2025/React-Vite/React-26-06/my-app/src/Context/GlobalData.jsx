import { createContext } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  let GlobalCountry = "India";

  return (
    <MyContext.Provider value={{ GlobalCountry }}>
      {children}
    </MyContext.Provider>
  );
};
