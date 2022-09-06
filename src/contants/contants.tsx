import { BiFootball, BiHomeAlt, BiInfoCircle, BiMoviePlay, BiUserCircle } from "react-icons/bi";

export const defaultIconSize = '1.875rem';

export const items = [
    { label: 'Home', icon: <BiHomeAlt className='md:mr-2' size={defaultIconSize}/>, to: '/'},
    { label: 'Movies', icon: <BiMoviePlay className='md:mr-2' size={defaultIconSize}/>, to: '/movies'},
    { label: 'About', icon: <BiInfoCircle className='md:mr-2' size={defaultIconSize}/>, to: '/about'},
    { label: 'Contact', icon: <BiUserCircle className='md:mr-2' size={defaultIconSize}/>, to: '/contact'},
    { label: 'Slide', icon: <BiFootball className='md:mr-2' size={defaultIconSize}/>, to: '/slide'},
]