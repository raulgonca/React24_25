import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Search = () => {
  const [search, setSearch] = useState("");
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  // Obtener lista completa de Pokémon al montar el componente
  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
        const data = await response.json();
        setAllPokemon(data.results.map(p => p.name));
      } catch (error) {
        toast.error("Error al cargar la lista de Pokémon");
      }
    };
    fetchAllPokemon();
  }, []);

  // Filtrar resultados con debounce
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search.trim()) {
        const searchTerm = search.toLowerCase();
        const filtered = allPokemon.filter(name => 
          name.startsWith(searchTerm)
        );
        setFilteredResults(filtered);
      } else {
        setFilteredResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [search, allPokemon]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const pokemonName = search.toLowerCase();
    if (allPokemon.includes(pokemonName)) {
      navigate(`/search/${pokemonName}`);
    } else {
      toast.error("Pokémon no encontrado", {
        style: {
          background: "#fee2e2",
          color: "black",
          border: "2px solid red",
        },
        icon: "❌",
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Buscar Pokemon</h1>
      <form 
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg relative"
      >
        <div className="flex gap-2 relative">
          <input 
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Buscar Pokemon"
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-rose-500"
          />
          <button
            className="bg-rose-500 hover:bg-slate-400 text-white px-4 py-2 rounded"
          >
            Buscar
          </button>
          
          {/* Lista de sugerencias */}
          {filteredResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10">
              {filteredResults.map((name) => (
                <div
                  key={name}
                  onClick={() => navigate(`/search/${name}`)}
                  className="p-2 hover:bg-gray-100 cursor-pointer capitalize"
                >
                  {name}
                </div>
              ))}
            </div>
          )}
        </div>
      </form> 
    </div>
  );
};

export default Search;