import { useState } from 'react';
import { BiLoaderCircle } from 'react-icons/bi';
import { MOVIES_DATA } from './dataMovies';
import MovieCard from './MovieCard';

const Trending = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    return (
        <>
            {/* <h3 className='border-b border-primary mt-[20px] mb-6 pb-4'>Trending</h3> */}

            <div className="grid flex-wrap grid-cols-1 sd:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5 sm:gap-10 mb-12 xl:grid-cols-3 2xl:grid-cols-4">
                {MOVIES_DATA.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>

            <div className="flex justify-center">
                <button className="btn hover:h-[48px] hover:scale-125 transition ease-linear" onClick={handleLoading}>
                    {loading ? <BiLoaderCircle className="animate-spin" size={'1.6rem'} /> : 'Load more'}{' '}
                </button>
            </div>
        </>
    );
};

export default Trending;
