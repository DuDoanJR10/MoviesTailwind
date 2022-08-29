import BatmanBegins from '../../assets/batman.jpg';
import Dune from '../../assets/dune.jpg';
import Sing2 from '../../assets/sing_2.jpg';
import SpiderMan from '../../assets/spider_man.jpg';
import DarkNightRises from '../../assets/the_dark_knight_rises.jpg';
import DarkNight from '../../assets/the_dark_knight.jpg';
import Boruto from '../../assets/boruto.jpg';
import Naruto from '../../assets/naruto.jpg';

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