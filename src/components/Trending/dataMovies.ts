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
    main: string;
    runtime: string;
}

export const MOVIES_DATA: Movie[] = [
    {
        src: BatmanBegins, title: 'Batman Begins', main: 'Christian Bale', runtime: '120ms'
    },
    {
        src: Dune, title: 'Dune', main: 'Lionel Messi', runtime: '120ms'
    },
    {
        src: Sing2, title: 'Sing 2', main: 'David Degea', runtime: '140ms'
    },
    {
        src: SpiderMan, title: 'Spider Man', main: 'Jadon Sancho', runtime: '90ms'
    },
    {
        src: DarkNightRises, title: 'My Love', main: 'Đoàn Văn Du', runtime: '110ms'
    },
    {
        src: DarkNight, title: 'Manchester United', main: 'Erik Ten-hag', runtime: '80ms'
    },
    {
        src: Boruto, title: 'Boruto: Naruto Next Generations', main: 'Uzumaki Boruto', runtime: '150ms'
    },
    {
        src: Naruto, title: 'Naruto Shippuden', main: 'Uzumaki Naruto', runtime: '200ms'
    }
]