import { BiHomeAlt, BiInfoCircle, BiMoviePlay, BiUserCircle } from 'react-icons/bi';

export const defaultIconSize = '1.875rem';

export const items = [
    { label: 'Trang Chủ', icon: <BiHomeAlt className="md:mr-2" size={defaultIconSize} />, to: '/' },
    { label: 'Danh mục', icon: <BiMoviePlay className="md:mr-2" size={defaultIconSize} />, to: '/category' },
    {
        label: 'Vật tư và thiết bị y tế',
        icon: <BiInfoCircle className="md:mr-2" size={defaultIconSize} />,
        to: '/items',
    },
    { label: 'Tài khoản', icon: <BiUserCircle className="md:mr-2" size={defaultIconSize} />, to: '/account' },
];
