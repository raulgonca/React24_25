const API_KEY = import.meta.env.VITE_API_KEY

const BASE_URL = import.meta.env.VITE_BASE_URL

const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL


//Tamaños de las imágenes
export const SIZE ={
    POSTER: "w500",
    ORIGINAL: "original",
}

const fetchFromAPI = async (endpoint, options={}) => {
    try {
        const response = await fetch(
            `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES&${new URLSearchParams(options)}`,
        );
        
        if (!response.ok) {
            throw new Error(`Error al obtener los datos de la API: ${response.status}`);
        }

        const data = await response.json();
        //donde se encuentra la información que queremos .result
        return data.results;
        
    } catch (error) {
        throw new Error(`Error al obtener los datos de la API: ${error.message}`);
    }
};

export const getPopularMovies = async () => {
    return await fetchFromAPI(`/movie/popular`);
}

export const getMovieDetails = async (id) => {
    return await fetchFromAPI(`/movie/${id}`);
}

export const getMovieVideos = async (id) => {
    return await fetchFromAPI(`/movie/${id}/videos`);
}

export const getImageURL = (path, size = SIZE.POSTER) => {
    return `${BASE_IMAGE_URL}/${size}/${path}`;
}
