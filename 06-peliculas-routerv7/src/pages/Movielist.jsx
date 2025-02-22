import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { getPopularMovies, getMoviesByGenre, getGenres } from '../services/tmdb';
import MovieCard from '../components/MovieCard';
import { PacmanLoader } from 'react-spinners';

const MovieList = () => {
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genres, setGenres] = useState([]);

  // Fetch genres when component mounts
  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data.genres);
      } catch (error) {
        console.error('Error loading genres:', error);
      }
    };
    loadGenres();
  }, []);

  // Fetch movies based on selected genre
  const { data: moviesData, loading, error } = useFetch(
    () => selectedGenre ? getMoviesByGenre(page, selectedGenre) : getPopularMovies(page),
    [page, selectedGenre]
  );

  const movies = moviesData?.results ?? [];
  const totalPages = moviesData?.total_pages ?? 0;

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    setPage(1);
  };
  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(newPage);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-sky-900 mb-6">Catálogo de Películas</h1>
        
        <div className="flex flex-wrap gap-4">
          <select 
            value={selectedGenre}
            onChange={handleGenreChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">Todos los géneros</option>
            {genres.map(genre => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
      </header>

      {loading && (
        <div className="flex justify-center my-8">
          <PacmanLoader color="#2320d3" />
        </div>
      )}
      
      {error && (
        <div className="text-center py-10">
          <p className="text-2xl font-bold text-red-500">
            Error al cargar las películas: {error}
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2 mb-10">
          <button 
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="bg-sky-900 text-white px-4 py-2 rounded-lg hover:bg-sky-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <span className="text-gray-800 font-bold px-4 py-2">
            Página {page} de {totalPages}
          </span>
          <button 
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="bg-sky-900 text-white px-4 py-2 rounded-lg hover:bg-sky-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieList;