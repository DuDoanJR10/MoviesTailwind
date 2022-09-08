import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import './SlideSlick.css'
import { dataSlick } from './dataSlide'

const ButtonNext = (props: any) => {
  const { onClick } = props
  return (
    <div 
      className={`arrow-slide-slick translate-x-[50%] right-0`}
      onClick={onClick}
    >
      <FaAngleRight color="#16405B" size={'18px'} />
    </div>
  )
}

const ButtonBack = (props: any) => {
  const { onClick } = props
  return (
    <div 
      className={`arrow-slide-slick translate-x-[-50%] left-0`}
      onClick={onClick}
    >
      <FaAngleLeft color="#16405B"  size={'18px'} />
    </div>
  )
}

const SlideSlick = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ButtonNext />,
    prevArrow: <ButtonBack />,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots: any) => (
      <div>
        <ul className="list-dots" style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="rounded-lg">
      <Slider className="relative" {...settings}>
        {dataSlick.map((slick, index) => (
          <div key={index} className="rounded-xl h-[400px] overflow-hidden">
            <img className="w-full h-full object-cover" alt={slick.alt} src={slick.src} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SlideSlick