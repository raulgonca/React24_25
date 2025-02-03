import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import RootLayout from "../layout/RootLayout";


const isAuthenticated = () => {
    //verifica si el token esta en localStorage
    return localStorage.getItem("token") !== null;
}
const ProtectedRoute = ({ children }) => {
    // const navigate = useNavigate();
    // debe impedir el acceso a no ser de que tenga un token en localStorage
    // if (!isAuthenticated()){
    //     navigate("/login");
    //     return null;        
    // }

    if (!isAuthenticated()){
        return <Navigate to="/" replace={true} />;

    } return children;


}

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },

                {
                    path: "/profile",
                    element: ( 
                        <ProtectedRoute > 
                            <Profile />
                        </ProtectedRoute>  
                    )
                },

                {
                    path: "/dashboard",
                    element: (
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    )
                }
            ]
        }
    ]
)