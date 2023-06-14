import React from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ Children }){
   return <AuthContext.Provider value={{}}>{Children}
    </AuthContext.Provider>;
   
}