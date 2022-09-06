import Slide1 from '../../assets/SlideImage/slide-1.jpeg'
import Slide2 from '../../assets/SlideImage/slide-3.jpeg'
import Slide3 from '../../assets/SlideImage/slide-4.jpeg'
import Slide4 from '../../assets/SlideImage/slide-5.jpeg'
import Slide5 from '../../assets/SlideImage/slide-8.jpeg'

import Slick1 from '../../assets/SlideSlick/slick-1.jpg'
import Slick2 from '../../assets/SlideSlick/slick-2.png'
import Slick3 from '../../assets/SlideSlick/slick-3.jpg'
import Slick4 from '../../assets/SlideSlick/slick-4.webp'
import Slick5 from '../../assets/SlideSlick/slick-5.jpg'

interface Slide {
  src: string;
  alt: string;
  default?: boolean;
}

interface Slick {
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
]

export const dataSlick: Slick[] = [
  { src: Slick1, alt: 'slick-1' },
  { src: Slick2, alt: 'slick-2' },
  { src: Slick3, alt: 'slick-3' },
  { src: Slick4, alt: 'slick-4' },
  { src: Slick5, alt: 'slick-5' },
]