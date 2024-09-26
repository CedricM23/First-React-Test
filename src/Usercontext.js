import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({children}) => {
    const [user] = useState({
        name: "jhon",
        email: "jhon@example.com",
        dob: "01/01/2000"
    });
    return <UserContext.Provider value={{user}}></UserContext.Provider>
}

export const useUser = () => useContext(UserContext);