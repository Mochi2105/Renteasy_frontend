import type { ReactNode } from "react";

export interface AuthUser {
    _id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    birth_date: string;
    role: "admin" | "user";
    picture_profile: string;
    favorite_flats: string[];
}

export interface AuthContextType {
    user: AuthUser | null; 
    isAuthenticated: boolean;
    loading: boolean;
    login: (userData: ClientFormData) => Promise<string>;
    signUp: (userData: ClientFormData) => Promise<string>;
    logOut: () => Promise<void>;
}

export interface AuthProviderProps {
    children: ReactNode;
}

export interface ClientFormData {
    [key: string]: string | Date | number | File[] | null | undefined; 
}