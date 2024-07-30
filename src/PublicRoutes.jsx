import { Navigate } from "react-router-dom";
import Signup from "./components/auth/Signup.jsx";

export default function routes() {
  return [
    { path: "/signup", element: <Signup /> },
    { path: "/", element: <Navigate replace to="/signup" /> },
    { path: "*", element: <Navigate to="/signup" replace /> },
  ];
}