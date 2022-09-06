import { useRef } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { dataSlick } from './dataSlide'

const SlideHome = () => {
  const imgRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const imageSelected = document.getElementsByClassName('active-slide')

  const handleNext = () => {
    let indexCurrent = imgRef.current.tabIndex;
    if (indexCurrent === dataSlick.length - 1) {
      indexCurrent = 0;
    } else {
      indexCurrent++
    }
    const listImage = document.querySelectorAll('.image-item')
    listImage.forEach((image: any) => {
      if (parseInt(image.getAttribute('tabIndex')) === indexCurrent) {
        imgRef.current.style.opacity = '0'
        setTimeout(() => {
          imgRef.current.src = image.getAttribute('src')
          imgRef.current.style.opacity = '1'
        }, 400)
        imgRef.current.tabIndex = indexCurrent
        imageSelected[0].classList.remove('active-slide')
        image.classList.add('active-slide')
      }
    })
  }

  const handleBack = () => {
    let indexCurrent = imgRef.current.tabIndex;
    if (indexCurrent === 0) {
      indexCurrent = dataSlick.length - 1;
    } else {
      indexCurrent--
    }
    const listImage = document.querySelectorAll('.image-item')
    listImage.forEach((image: any) => {
      if (parseInt(image.getAttribute('tabIndex')) === indexCurrent) {
        imgRef.current.style.opacity = '0'
        setTimeout(() => {
          imgRef.current.src = image.getAttribute('src')
          imgRef.current.style.opacity = '1'
        }, 400)
        imgRef.current.tabIndex = indexCurrent
        imageSelected[0].classList.remove('active-slide')
        image.classList.add('active-slide')
      }
    })
  }
  
  return (
    <>
      <div className='hidden sm:block'>
        <div className="w-[100%] h-[50%] mx-auto">
          <div className="relative h-[300px] w-full">
            <img ref={imgRef} tabIndex={0} src={dataSlick[0].src} className='rounded-lg w-full transition-all duration-700 select-none h-full object-cover' alt="slide-main" />
            <div className='arrow-slide-slick translate-x-[50%] right-0'>
                <FaAngleRight onClick={handleBack} color="#16405B" size={'18px'} />
            </div>
            <div className='arrow-slide-slick translate-x-[-50%] left-0'>
                <FaAngleLeft onClick={handleNext} color="#16405B" size={'18px'} />
            </div>
          </div>
          <div className="w-full justify-between hidden">
            {dataSlick.map((slide, index) => {
              return (
                <div key={index}>
                  <img tabIndex={index} className='image-item' src={slide.src} alt={slide.alt} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default SlideHome