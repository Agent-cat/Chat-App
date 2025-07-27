import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";
import LoginPage from "../pages/LoginPage";

import SignUpPage from "../pages/SignupPage";
import { useAuthStore } from "../store/useAuthStore";
const Navroutes = () => {
  const { authUser } = useAuthStore();
  console.log(authUser)
  return (
    <Routes>
      <Route
        path="/"
        element={authUser ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!authUser ? <LoginPage /> : <Navigate to="/" />}
      />
      <Route path="/settings" element={<SettingsPage />} />
      <Route
        path="/signup"
        element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
      />
      <Route
        path="/profile"
        element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default Navroutes;
