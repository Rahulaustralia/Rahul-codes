import { Children, createContext, useContext } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const myName = "Rahul";
  const myCountry = "Australia";

  return (
    <MyContext.Provider value={{ myName, myCountry }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("error while geting the context value");
  }
  return context;
};
