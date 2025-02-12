import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { useFetch } from "../hooks/useFetch";
import { getMovieDetails,    getImageURL } from "../services/tmdb.js";

const MovieDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    () => getMovieDetails(Number(id)),
    [id]
  );

  if (error) {
    return (
      <div className="text-center p-10">
        <p className="text-red-600">Error al cargar la película {error}</p>
      </div>
    );
  }
  if (loading) <PacmanLoader color="#3a6bca" />;

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header con imagen de fondo
       */}
      <header className="relative h-96 mb-8">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={getImageURL(data?.backdrop_path, "original")}
          alt={data?.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
          <div className="absolute bottom-0 text-white p-6">
            <h1 className="text-4xl font-bold">{data?.title}</h1>
          </div>
        </div>
      </header>

      {/* Contenido de la película */}
      <section className="grid md:grid-cols-3 gap-8">
        <div>
          <img
            className="w-full object-cover rounded-lg mb-10 "
            src={getImageURL(data?.poster_path)}
            alt={data?.title}
          />
        </div>
        <section className="md:col-span-2 space-y-6">
          <section className="flex items-center gap-4 text-sm">
            <span className="font-bold mt-4"> {data?.release_date.split("-")[0]} </span>
            <span className="font-bold mt-4">{data?.runtime} min</span>
            <span className="font-bold mt-4">{Number(data?.vote_average).toFixed(1)}⭐ </span>
          </section>

          <section className="text-sky-800 ">
            <span className="font-bold mt-4"> Generos : {data?.genres.map((genre) => genre.name).join(", ")}</span>
          </section>

          <section>
            <h2 className="text-lg font-bold text-sky-900">Sinopsis</h2>
            <p>{data?.overview}</p>
          </section>

          <section>
            
          </section>
        </section>
        
      </section>


    </article>
  );
};

export default MovieDetail;