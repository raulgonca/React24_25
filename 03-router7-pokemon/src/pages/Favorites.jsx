import { usePokemon } from "../context/PokemonContext";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/paths";

const Favorites = () => {

  const { favorites, removeFromFavorite } = usePokemon();

  if ( favorites.length === 0 ) { 
    return (
      <div className="container mx-auto p-4">
        <p className="text-2xl font-bold">No tienes favoritos</p>
        <Link to={ROUTES.HOME}
        className=" text-blue-400 hover:underline py-2 rounded">
          Ir a Home
        </Link>

      </div>
    )
  }


  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Favoritos</h1>
        <Link to={ROUTES.HOME}
        className=" text-blue-400 hover:underline py-2 rounded">
          Ir a Home
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          {favorites.map((pokemon) => (
            <div
              key={pokemon.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-sm flex flex-col items-center justify-center"
            >
              <div className="mb-4">
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={pokemon.name}
                  className="w-20 h-20 rounded-xl"
                />
              </div>
              <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
              <div className="flex justify-center space-x-2 mt-4">
                <button
                  className="bg-red-500 hover:bg-slate-400 text-white px-4 py-2 rounded"
                  onClick={ () => {
                    removeFromFavorite(pokemon.id);
                  }}
                >
                    Delete fav
                </button>
                <Link 
                  to={`${ROUTES.SEARCH}/${pokemon.name}`}
                  className="bg-blue-500 hover:bg-slate-400 text-white px-4 py-2 rounded">
                    Ver Detalles
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    
  )
}

export default Favorites