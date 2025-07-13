import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/md-light-deeppurple/theme.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import { Route, Routes } from "react-router";
import { HomeScreen } from "./screens/HomeScreen";
import { AllUsersScreen } from "./screens/AllUsersScreen";
import { UserViewScreen } from "./screens/UserViewScreen";
import { AllFlatsScreen } from "./screens/AllFlatsScreen";
import { FlatViewScreen } from "./screens/FlatViewScreen";
import { MyFlatsScreen } from "./screens/MyFlatsScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { SignUpScreen } from "./screens/SignUpScreen";
import { UserProfileScreen } from "./screens/UserProfileScreen";
import { NavBarComponent } from "./components/NavBarComponent";
import { FooterComponent } from "./components/FooterComponent";

export const App = () => {
  return (
    <PrimeReactProvider>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/allUsers" element={<AllUsersScreen />} />
        <Route path="/userView" element={<UserViewScreen />} />
        <Route path="/allFlats" element={<AllFlatsScreen />} />
        <Route path="/flatView" element={<FlatViewScreen />} />
        <Route path="/myFlats" element={<MyFlatsScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signUp" element={<SignUpScreen />} />
        <Route path="/profile" element={<UserProfileScreen />} />
      </Routes>
      <FooterComponent />
    </PrimeReactProvider>
  );
};
