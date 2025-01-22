import { useEffect, useState } from "react";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Pokemons</h1>
      {loading ? (
        <p>Cargando pokemons...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pokemon.map((pokemon) => (
            <div
              key={pokemon.id}
              className="bg-white rounded-xl p-6 hover:shadow-sm"
            >
              <div>
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <h2 className="text-xl font-bold mt-4">{pokemon.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
