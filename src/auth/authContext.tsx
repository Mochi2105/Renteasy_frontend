import React, { createContext, useEffect, useState } from "react";
import type { AuthContextType, AuthProviderProps, AuthUser } from "../types/authTypes";
import axios from "axios";

export const AuthContext = createContext<AuthContextType | undefined>(undefined); //contexto

const API_BASE_URL = "http://localhost:8000"; 
axios.defaults.withCredentials = true; //permisos para enviar la cookie

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<AuthUser | null>(null); 
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const checkAuthStatus = async () => {  //verificar el estado de autenticacion
        try { 
            setLoading(true);
            const response = await axios.get<AuthUser>(`${API_BASE_URL}/users/me`);
            if (response.data) {
                setUser(response.data); 
                setIsAuthenticated(true);
            }
        } catch (error) {
            setUser(null);
            setIsAuthenticated(false);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
      checkAuthStatus();
    }, [])
    
    return (
        <AuthContext.Provider value={{user, isAuthenticated, loading}}>
            {children}
        </AuthContext.Provider>

    )
}










