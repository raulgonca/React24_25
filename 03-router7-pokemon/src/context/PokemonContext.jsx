import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
    //Hooks
    const [favorites, setfavorites] = useState([]);
    
    const addFavorites = (pokemon) => {
        //verificamos si el pokemon ya existe en la lista de favoritos
        if (favorites.some(poke => poke.id === pokemon.id)) {
            //lanzamos error con sonner
            Sonner.error("Ya existe en favoritos");
            return;
        }
        setfavorites((prevFavoritos) => [...favoritos, pokemon]);
    };

    const removeFromFavorite = (pokemonId) => {
    };


    return (
        <PokemonContext.Provider value={{}}>
            {children}
        </PokemonContext.Provider>
    );
}

// Me creo un hooks personalizado para cargar el contexto
export const usePokemon = () => {
    //para usar el contexto se hace : 
    const context = useContext(PokemonContext);
    if (context === undefined) {
        throw new Error("usePokemon must be used within a PokemonProvider");
    }
    return context;
}

