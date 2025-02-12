import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (fetchFuction, dependencies=[]) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const fetchData = async () => {
        try {
            setData(await fetchFuction());
            //otra forma de hacer el mismo
            //const data = await fetchFuction();
            //setData(data);  
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }

    };

    //solo se ejecutara una vez si dependencies esta vacio o cambia el valor de dependencies
    useEffect(() => {
        // Objeto que nos permite abortar el fecth
        const abortController = new AbortController();
        setLoading(true);
        fetchData();
        //limpiamos los errores
        setError(null);

        
        return () => {
            // lo que ejecutemos aqui se ejecutara cuando se desmonte el componente
            abortController.abort();

        }
    }, dependencies);



    //returnamos lo neceario para poder usar el hook
    return { data, loading, error };
};