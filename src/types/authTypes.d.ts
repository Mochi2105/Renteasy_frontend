import type { ReactNode } from "react";

export interface AuthUser {
    _id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    birthday: string;
    role: string;
}

export interface AuthContextType {
    user: AuthUser | null; 
    isAuthenticated: boolean;
    loading: boolean;

}

export interface AuthProviderProps {
    children: ReactNode;
}