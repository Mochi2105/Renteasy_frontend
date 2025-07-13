import React, { useEffect, useState } from "react";
import type {
  AuthProviderProps,
  AuthUser,
  ClientFormData,
} from "../types/authTypes";
import axios from "axios";
import { AuthContext } from "./AuthContextDefinition";

const API_BASE_URL = "http://localhost:8000";
axios.defaults.withCredentials = true; //permisos para enviar la cookie

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const checkAuthStatus = async () => {
    //verificar el estado de autenticacion
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
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const login = async (userData: ClientFormData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/login/`,
        userData
      );
      if (response.status === 200) {
        //codigo para una solicitud efectuada correctamente
        setUser(response.data.user);
        setIsAuthenticated(true);
        return response.data.message;
      }
      return response.data.message;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data || error.message);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (userData: ClientFormData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/signup/`,
        userData
      );
      if (response.status === 200) {
        //codigo para una solicitud efectuada correctamente
        setUser(response.data.user);
        setIsAuthenticated(true);
        return response.data.message;
      }
      return response.data.message;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data || error.message);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/users/logout/`);
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, login, signUp, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
