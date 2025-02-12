import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Movielist from "../pages/Movielist";
import ErrorPage from "../pages/ErrorPage";
import MovieDetail from "../pages/MovieDetail";
import Search from "../pages/Search";
import Reviews from "../pages/Reviews";
import Favorites from "../pages/Favorites";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "movies",
                element: <Movielist />
            },
            {
                path: "movie/:id",
                element: <MovieDetail />
            },
            {
                path: "search",
                element: <Search />
            },
            {
                path: "reviews",
                element: <Reviews />
            },
            {
                path: "favorites",
                element: <Favorites />
            }
        ]
    }
]
)