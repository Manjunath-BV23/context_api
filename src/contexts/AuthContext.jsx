import { createContext, useState } from "react";
import { Login } from "../components/Login";
import { Logout } from "../components/Logout";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [add, setAdd] = useState(true);

    return <AuthContext.Provider value = {{Login,Logout}}>{children}</AuthContext.Provider>
    
}