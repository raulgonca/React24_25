//para traer la ruta que nos trae hasta este componente usamos
import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PokemonDetail = () => {
  //Hooks
  //pokemon trae la data atraves de la funcionalidad LoaderData de React Router Dom
  const pokemon = useLoaderData();
  // hook paa navegar entre rutas (navegacion programatica)
  const navigate = useNavigate();
  // contexto global
  const { addFavorite } = useContext(PokemonContext);


  return (
    <>
      <div className="container mx-auto p-4">
        <div className=" max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-lg">
          {/* Boton para volver a la página de inicio */}
          <button
            className="mb-4 text-blue-400 hover:underline"
            onClick={() => navigate(-1)}
          >
            Volver
          </button>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            className="w-100 h-100 mx-auto"
          />
          <h1 className="text-3xl font-bold text-center mt-4">
            {pokemon.name}
          </h1>
          {/* Informacion del pokemon usando Grid */}

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h2 className="text-xl font-bold">Estadisticas</h2>
              {pokemon.stats.map((stat) => (
                <div key={stat.stat.name}>
                  <p className="capitalize">
                    {stat.stat.name} : {stat.base_stat}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Tipos</h2>
              <div className="flex flex-wrap gap-2">
                {pokemon.types.map((type) => (
                  <div key={type.type.name}>
                    <p className="capitalize">{type.type.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-red-500 hover:bg-slate-400 text-white px-4 py-2 rounded  ">
              Favoritos ⭐
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
