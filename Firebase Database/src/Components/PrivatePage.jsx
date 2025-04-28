// src/PrivateRoute.js
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  return user ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
