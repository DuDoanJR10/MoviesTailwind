import { BiTime } from 'react-icons/bi'
import { Movie } from './dataMovies'

const MovieCard = ({ movie }: {movie: Movie}) => {
    const { src, title, runtime } = movie
    return (
        <div className='card'>
            <img src={src} className='w-full h-[400px] object-cover relative' alt='Movie'/>
            <div className='p-4 text-white bg-[rgba(0,0,0,.8)] absolute bottom-0 left-0 right-0'>
                <h4 className='h-[32px] overflow-hidden text-ellipsis whitespace-nowrap '>{title}</h4>
            </div>
            <div className='badge text-primary'>
                <BiTime />
                <p>{runtime}</p>
            </div>
        </div>
    )
}

export default MovieCard