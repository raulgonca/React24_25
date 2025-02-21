import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { useFetch } from "../hooks/useFetch";
import { getMovieDetails, getMovieVideos, getImageURL } from "../services/tmdb.js";
import Reviews from "./Reviews";

const MovieDetail = () => {
  const { id } = useParams();
  
  const { data: movieData, loading: movieLoading, error: movieError } = useFetch(
    () => getMovieDetails(Number(id)),
    [id]
  );

  const { data: videoData, loading: videoLoading, error: videoError } = useFetch(
    () => getMovieVideos(Number(id)),
    [id]
  );

  if (movieError || videoError) {
    return (
      <div className="text-center p-10">
        <p className="text-red-600">
          Error al cargar la película: {movieError || videoError}
        </p>
      </div>
    );
  }

  if (movieLoading || videoLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PacmanLoader color="#3a6bca" />
      </div>
    );
  }

  const trailer = videoData?.results?.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );
  return (
    <article className="max-w-4xl mx-auto pb-10">
      {/* Header con imagen de fondo */}
      <header className="relative h-96 mb-8">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={getImageURL(movieData?.backdrop_path, "original")}
          alt={movieData?.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
          <div className="absolute bottom-0 text-white p-6">
            <h1 className="text-4xl font-bold">{movieData?.title}</h1>
            {movieData?.tagline && (
              <p className="text-lg italic mt-2">{movieData.tagline}</p>
            )}
          </div>
        </div>
      </header>
  {/* Contenido de la película */}
      <section className="grid md:grid-cols-3 gap-8">
        <div>
          <img
            className="w-full object-cover rounded-lg mb-4"
            src={getImageURL(movieData?.poster_path)}
            alt={movieData?.title}
          />
          <div className="space-y-4">
            <div className="bg-sky-100 p-4 rounded-lg">
              <h3 className="font-bold text-sky-900 mb-2">Información</h3>
              <ul className="space-y-2">
                <li><span className="font-bold">Estado:</span> {movieData?.status}</li>
                <li><span className="font-bold">Fecha de estreno:</span> {movieData?.release_date}</li>
                <li><span className="font-bold">Duración:</span> {movieData?.runtime} minutos</li>
                <li><span className="font-bold">Presupuesto:</span> ${movieData?.budget?.toLocaleString()}</li>
                <li><span className="font-bold">Ingresos:</span> ${movieData?.revenue?.toLocaleString()}</li>
              </ul>
            </div>
          </div>
        </div>
  {/* Add Reviews section */}
        <section className="md:col-span-2 space-y-6">
          <section className="flex items-center gap-4 text-sm">
            <span className="px-3 py-1 bg-sky-100 rounded-full">
              {movieData?.release_date.split("-")[0]}
            </span>
            <span className="px-3 py-1 bg-sky-100 rounded-full">
              {movieData?.runtime} min
            </span>
            <span className="px-3 py-1 bg-sky-100 rounded-full">
              ⭐ {Number(movieData?.vote_average).toFixed(1)}
            </span>
          </section>

          <section className="flex flex-wrap gap-2">
            {movieData?.genres.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 bg-sky-200 text-sky-800 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </section>

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-sky-900">Sinopsis</h2>
            <p className="text-gray-700 leading-relaxed">{movieData?.overview}</p>
          </section>

          {trailer && (
            <section className="space-y-2">
              <h2 className="text-2xl font-bold text-sky-900">Trailer</h2>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          )}

          {/* Reviews section */}
          <section className="space-y-2 mt-8 border-t pt-8">
            <Reviews movieId={Number(id)} />
          </section>
        </section>
      </section>
    </article>
  );
};

export default MovieDetail;