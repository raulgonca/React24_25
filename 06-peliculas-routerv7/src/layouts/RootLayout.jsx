import { NavLink, Outlet } from "react-router-dom"
import { useFavorites } from "../contexts/FavoritesContext"

const RootLayout = () => {
  const { getFavorites } = useFavorites();
  const favorites = getFavorites();

  return (
    <>
      <div className="min-h-screen bg-white">
        <nav className="bg-sky-950 text-white shadow-lg mb-6">
          <div className="max-w-7xl mx-auto px-4 ">
            <div className="flex justify-between h-16">
              <div className="flex items-center space-x-8">
                <NavLink to="/" className="text-xl font-bold">
                  VideoClub
                </NavLink>
                <NavLink 
                  to="/movies" 
                  className="flex items-center space-x-2 hover:text-sky-300 transition-colors"
                >
                  <span>Películas</span>
                </NavLink>
                <NavLink 
                  to="/favorites" 
                  className="flex items-center space-x-2 hover:text-sky-300 transition-colors"
                >
                  <span>Favoritas ({favorites.length})</span>
                </NavLink>
                <NavLink 
                  to="/search"
                  className="flex items-center space-x-2 hover:text-sky-300 transition-colors"
                >
                  <span>Buscador</span>
                </NavLink>
                <NavLink 
                  to="/reviews"
                  className="flex items-center space-x-2 hover:text-sky-300 transition-colors"
                >
                  <span>Reseñas</span>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Outlet />
        </main>

        <footer className="bg-sky-900 text-white mx-auto bottom-0 w-full">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <p className="text-center">
              &copy; 2025 VideoClub. Raúl González
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default RootLayout