import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './SlideSwiper.css'

import { Navigation, Autoplay } from "swiper";
import { dataSwiper } from "./dataSwiper";

const SlideSwiper = () => {
    return (
        <div className="slide-home overflow-hidden rounded-xl cursor-pointer mn:h-[150px] sm:h-[250px] xl:h-[300px]"
        >
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {dataSwiper.map((swiper, index) => {
                    return (
                        <SwiperSlide className="DuDoan" key={index}>
                            <img className="w-full h-full object-cover select-none" src={swiper.src} alt={swiper.alt} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            
        </div>
    )
}

export default SlideSwiper