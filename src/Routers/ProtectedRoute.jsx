import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null; // ⏳ Don't render anything while loading

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
