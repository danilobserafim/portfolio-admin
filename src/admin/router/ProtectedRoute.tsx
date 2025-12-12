import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuth = Boolean(localStorage.getItem("auth_token"));
  return isAuth ? children : <Navigate to="/login" replace />;
}
