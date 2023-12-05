import BatmanBegins from '../../assets/FilmImage/batman.jpg';
import Dune from '../../assets/FilmImage/dune.jpg';
import Sing2 from '../../assets/FilmImage/sing_2.jpg';
import SpiderMan from '../../assets/FilmImage/spider_man.jpg';
import DarkNightRises from '../../assets/FilmImage/the_dark_knight_rises.jpg';
import DarkNight from '../../assets/FilmImage/the_dark_knight.jpg';
import Boruto from '../../assets/FilmImage/boruto.jpg';
import Naruto from '../../assets/FilmImage/naruto.jpg';

export interface Movie {
    src: string;
    title: string;
    runtime: string;
}

export const MOVIES_DATA: Movie[] = [
    {
        src: BatmanBegins,
        title: 'Vật tư 1',
        runtime: '120ms',
    },
    {
        src: Dune,
        title: 'Vật tư 2',
        runtime: '120ms',
    },
    {
        src: Sing2,
        title: 'Vật tư 3',
        runtime: '140ms',
    },
    {
        src: SpiderMan,
        title: 'Vật tư 4',
        runtime: '90ms',
    },
    {
        src: DarkNightRises,
        title: 'Vật tư 5',
        runtime: '110ms',
    },
    {
        src: DarkNight,
        title: 'Vật tư 6',
        runtime: '80ms',
    },
    {
        src: Boruto,
        title: 'Vật tư 7',
        runtime: '150ms',
    },
    {
        src: Naruto,
        title: 'Vật tư 8',
        runtime: '200ms',
    },
];
