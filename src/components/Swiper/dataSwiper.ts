import Swiper_1 from '../../assets/ImageSwiper/swiper-1.jpg'
import Swiper_2 from '../../assets/ImageSwiper/jichangwook.png'
import Swiper_3 from '../../assets/ImageSwiper/swiper-3.jpg'
import Swiper_4 from '../../assets/ImageSwiper/dragon.png'
import Swiper_5 from '../../assets/ImageSwiper/swiper-5.jpg'

interface Swiper {
    src: string;
    alt: string;
}

export const dataSwiper: Swiper[] = [
    { src: Swiper_1, alt: 'Swiper_1' },
    { src: Swiper_2, alt: 'Swiper_2' },
    { src: Swiper_3, alt: 'Swiper_3' },
    { src: Swiper_4, alt: 'Swiper_4' },
    { src: Swiper_5, alt: 'Swiper_5' },
]