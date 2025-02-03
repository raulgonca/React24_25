import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../router/paths.js";
import { usePokemon } from "../context/PokemonContext";
import  Spinner from "../components/Spinner.jsx";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addFavorites } = usePokemon();

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch pokemon");
      }
      const data = await response.json();
      // Obtenemos los datos de los pokemon en paralelo
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      setPokemon(pokemonDetails);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
        </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pokemons</h1>
      {loading ? (
        <p>Cargando pokemons...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pokemon.map((pokemon) => (
            <div
              key={pokemon.id}
              className="bg-white rounded-xl p-6 hover:shadow-sm flex flex-col items-center justify-center"
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
                    addFavorites(pokemon);
                  }}
                >
                    Favorites
                </button>
                <Link 
                  to={`${ROUTES.SEARCH}/${pokemon.name}`}
                  className="bg-green-600 hover:bg-slate-400 text-white px-4 py-2 rounded">
                    Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
