import { BiTime } from 'react-icons/bi'
import { Movie } from '../Trending/dataMovies'

const CardTest = ({ movie }: {movie: Movie}) => {
    const { src, title, main, runtime } = movie
    return (
        <div className='card'>
            <img src={src} className='w-full h-[359.975px] object-cover' alt='Movie'/>
            <div className='p-4 text-white'>
                <h4>{title}</h4>
                <p>{main}</p>
            </div>
            <div className='badge text-primary'>
                <BiTime />
                <p>{runtime}</p>
            </div>
        </div>
    )
}

export default CardTest