import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const ProtectedRoute = ({ children } ) => {

 const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // lo manda a la pagina de login que es /
    return <Navigate to="/" replace={true} />
  } 
  // si esta logueado y lo dejamos pasar a la siguiente ruta
  return children;


  
}

export default ProtectedRoute