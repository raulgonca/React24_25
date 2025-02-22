import { Link } from "react-router-dom"
import { getImageURL } from "../services/tmdb"
import { useFavorites } from "../contexts/FavoritesContext"

const MovieCard = ({ movie }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const isMovieFavorite = isFavorite(movie.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (isMovieFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };
  
  return (
    <Link to={`/movie/${movie.id}`} className="group">
      <article className="card transform transfotm-transition duration-200 group-hover:scale-105">
        <div className="relative aspect-[2/3]">
          <img src={getImageURL(movie?.poster_path)} alt={movie?.title} 
              className="w-full h-full object-cover rounded-lg" 
          />
          <div className="absolute top-3 right-3 bg-black text-white px-2 py-2 rounded-lg">
            ⭐{Number(movie?.vote_average).toFixed(1)}
          </div>
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 left-3 bg-black text-white p-2 rounded-lg"
          >
            {isMovieFavorite ? '❤️' : '🤍'}
          </button>

          <div className="p-4">
            <h3 className="text-lg font-bold text-sky-900 group-hover:text-gray-500">
                {movie?.title}
            </h3>
            <p className="text-gray-800 text-sm font-bold"> {movie?.release_date.split("-")[0]} </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;