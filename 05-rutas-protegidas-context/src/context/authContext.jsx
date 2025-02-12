import { createContext, useContext, useState } from "react";

const authContext = createContext();

//creo el provider
export const AuthProvider = ( { children } ) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //funciones para el login y logout
    // simulo el login, si existe in token en el localstorage con valor true, entoncesel usuario esta logueado

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem("token", JSON.stringify(true));
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("token");
    }



    return (
        <authContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </authContext.Provider>
    );
}

//hook para acceder al contexto
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};
