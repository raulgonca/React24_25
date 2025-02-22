const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = import.meta.env.VITE_BASE_URL;

const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;



//Tamaños de las imágenes
export const SIZE ={
    POSTER: "w500",
    ORIGINAL: "original",
}

const fetchFromAPI = async (endpoint, options={}) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES&${new URLSearchParams(options)}`);
        //console.log('URL solicitada:', `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES&${new URLSearchParams(options)}`);
        
        if (!response.ok) {     
            throw new Error(`Error al obtener los datos de la API: ${response.status}`);
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        throw new Error(`Error al obtener los datos de la API: ${error.message}`);
    }
};

export const getPopularMovies = async (page = 1, options = {}) => {
    return await fetchFromAPI("/movie/popular", { page, ...options });
};

export const getMovieDetails = async (id) => {
    return await fetchFromAPI(`/movie/${id}`);
}

export const getMovieVideos = async (id) => {
    return await fetchFromAPI(`/movie/${id}/videos`);
}

export const getImageURL = (path, size = SIZE.POSTER) => {
    return `${BASE_IMAGE_URL}/${size}${path}`;
}

export const searchMovies = async (query, page = 1) => {
    return await fetchFromAPI("/search/movie", { query, page });
};

export const getGenres = async () => {
    return await fetchFromAPI("/genre/movie/list");
};

export const getMoviesByGenre = async (page = 1, genreId) => {
    return await fetchFromAPI("/discover/movie", {
        page,
        with_genres: genreId
    });
};