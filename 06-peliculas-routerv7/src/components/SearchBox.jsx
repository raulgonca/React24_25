import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { useState } from 'react';

const SearchBox = () => {
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const searchValue = e.target.search.value;
        navigate(`/search?query=${searchValue}`);
        setIsLoading(false);
    };

    return (
        <form className="flex justify-center my-5" onSubmit={handleSubmit}>
            <div className="flex gap-2 w-full max-w-2xl">
                <input 
                    type="text" 
                    name="search"
                    placeholder="Buscar películas..."
                    aria-label="Search Movies"
                    defaultValue={searchParams.get('query') ?? ''}
                    className="w-full h-12 px-6 rounded-full border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent shadow-sm"
                />
                <button 
                    type="submit"
                    disabled={isLoading}
                    className="px-8 rounded-full bg-sky-900 text-white font-medium hover:bg-sky-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                    {isLoading ? (
                        <PacmanLoader color="#ffffff" size={10} />
                    ) : (
                        'Buscar'
                    )}
                </button>
            </div>
        </form>
    );
};

export default SearchBox;
