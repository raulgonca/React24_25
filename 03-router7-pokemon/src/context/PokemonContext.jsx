import { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
    //Hooks
    const [favorites, setfavorites] = useState([]);
    
    const addFavorite = (pokemon) => {
        setfavorites([...favorites, pokemon]);
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

