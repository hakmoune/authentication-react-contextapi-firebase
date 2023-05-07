import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation(); // Tu pass le nom de la derniere page, pour qu'on puisse revenire a cette page apres l'authentification
  if (!currentUser) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default RequiredAuth;
