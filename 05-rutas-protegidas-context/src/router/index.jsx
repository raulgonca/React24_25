import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute.jsx";
import { RootLayout } from "../layout/RootLayout.jsx";
import { AdminLayout } from "../layout/AdminLayout.jsx";
import { ErrorPage } from "../pages/ErrorPage.jsx";
import { Login } from "../pages/Login.jsx";
import { Dashboard } from "../pages/Dashboard.jsx";
import { User } from "../pages/User.jsx";
import { Product } from "../pages/Product.jsx";
import { Settings } from "../pages/Setting.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: "admin",
                element: (
                <ProtectedRoute>
                    <AdminLayout />
                </ProtectedRoute>
                ),
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                    {
                        path: "user",
                        element: <User />,
                    },
                    {
                        path: "product",
                        element: <Product />,
                    },
                    {
                        path: "settings",
                        element: <Settings />,
                    }
                ],
            },
        ],
    }
]);

