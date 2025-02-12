import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { getPopularMovies } from "../services/tmdb";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    () => getPopularMovies(page),
    [page]
  );

  //si se produce un error que hago
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-red-500">
          Error al obtener los datos. ( {error} )
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Volver a la página principal
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-bold text-sky-950">
          Bienvenido al VideoClub DWEC
        </h1>

        <p className="mt-4 text-gray-800">
          Aquí podrás encontrar las películas más populares del momento
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-bold text-sky-900">
          Películas Populares
        </h2>
        {loading ? (
          <div> Cargando... </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {data?.results?.map((movie) => {
                <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
