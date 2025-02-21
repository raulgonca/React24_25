
import { useFavorites } from "../contexts/FavoritesContext"
import MovieCard from "../components/MovieCard"

const Favorites = () => {
  const { getFavorites } = useFavorites();
  const favorites = getFavorites();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-sky-900 mb-8">Mis Películas Favoritas</h1>
      
      {favorites.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          No tienes películas favoritas aún.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites