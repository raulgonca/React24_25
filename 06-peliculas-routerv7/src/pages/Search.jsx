import { useSearchParams } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import { useFetch } from '../hooks/useFetch';
import MovieCard from '../components/MovieCard';
import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import { searchMovies } from '../services/tmdb';

const Search = () => {
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const query = searchParams.get('query');

    const { data, loading, error } = useFetch(
        query ? () => searchMovies(query, page) : null,
        [query, page]
    );

    const movies = data?.results ?? [];
    const totalPages = data?.total_pages ?? 0;

    useEffect(() => {
        setPage(1);
    }, [query]);

    if (!query) return <SearchBox />;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <SearchBox />
            
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
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        className="bg-sky-900 text-white px-4 py-2 rounded-lg hover:bg-sky-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Anterior
                    </button>
                    <span className="text-gray-800 font-bold px-4 py-2">
                        Página {page} de {totalPages}
                    </span>
                    <button 
                        onClick={() => setPage(page + 1)}
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

export default Search;