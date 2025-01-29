import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
    // Hooks
    const [favorites, setFavorites] = useState([]);
    
    const addFavorites = (pokemon) => {
        // Verificamos si el Pokémon ya existe en la lista de favoritos
        if (favorites.some(poke => poke.id === pokemon.id)) {
            toast.error("Ya existe en favoritos", {
                style: {
                    background: "red",
                    color: "white",
                    border: "2px solid red",
                },
            });
            return;
        }
        setFavorites((prevFavorites) => [...prevFavorites, pokemon]);
        toast.success("Añadido a favoritos", {
            style: {
                background: "green",
                color: "white",
                border: "2px solid green",
            },
        });
        ;
    };

    const removeFromFavorite = (pokemonId) => {
        setFavorites((prevFavorites) => prevFavorites.filter(poke => poke?.id !== pokemonId));
    };

    return (
        <PokemonContext.Provider value={{ favorites, addFavorites, removeFromFavorite }}>
            {children}
        </PokemonContext.Provider>
    );
}

// Me creo un hook personalizado para cargar el contexto
export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error("usePokemon must be used within a PokemonProvider");
    }
    return context;
};
