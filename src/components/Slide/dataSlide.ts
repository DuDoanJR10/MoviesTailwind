import Slide1 from '../../assets/SlideImage/slide-1.jpg';
import Slide2 from '../../assets/SlideImage/slide-3.jpg';
import Slide3 from '../../assets/SlideImage/slide-4.jpg';
import Slide4 from '../../assets/SlideImage/slide-5.jpg';
import Slide5 from '../../assets/SlideImage/slide-8.jpg';

interface Slide {
    src: string;
    alt: string;
    default?: boolean;
}

export const dataSlide: Slide[] = [
    { src: Slide1, alt: 'slide-1', default: true },
    { src: Slide2, alt: 'slide-2' },
    { src: Slide3, alt: 'slide-3' },
    { src: Slide4, alt: 'slide-4' },
    { src: Slide5, alt: 'slide-5' },
];
