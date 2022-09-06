import { useRef } from 'react'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import { dataSlide } from './dataSlide'

const Test = () => {
  const imgRef = useRef() as React.MutableRefObject<HTMLImageElement>
  const imageSelected = document.getElementsByClassName('active-slide')

  const handleClickImage = (e: any) => {
    imageSelected[0].classList.remove('active-slide')
    e.target.classList.add('active-slide')
    imgRef.current.tabIndex = e.target.getAttribute('tabIndex')
    imgRef.current.style.opacity = '0'
    setTimeout(() => {
      imgRef.current.src = e.target.getAttribute('src')
      imgRef.current.style.opacity = '1'
    }, 400)
  }

  const handleNext = () => {
    let indexCurrent = imgRef.current.tabIndex;
    if (indexCurrent === dataSlide.length - 1) {
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
      indexCurrent = dataSlide.length - 1;
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
      <div className="min-h-screen">
        <div className=" w-[80%] h-[80%] mx-auto">
          <div className=" relative  w-full mb-[20px]">
            <img ref={imgRef} tabIndex={0} src={dataSlide[0].src} className='w-full transition-all duration-700 select-none h-full object-cover' alt="slide-main" />
            <BsFillCaretLeftFill onClick={handleBack} className='hover:scale-105 transition-all duration-500 absolute top-[50%] translate-y-[-50%] left-[10px] cursor-pointer' color="#fff" size={"50px"} />
            <BsFillCaretRightFill onClick={handleNext} className='hover:scale-105 transition-all duration-500 absolute top-[50%] translate-y-[-50%] right-[10px] cursor-pointer' color="#fff" size={"50px"} />
          </div>
          <div className="w-full h-[25%] flex justify-between ">
            {dataSlide.map((slide, index) => {
              return (
                <div key={index} className="flex-1 block" onClick={handleClickImage}>
                  <img tabIndex={index} className={`image-item block w-full cursor-pointer p-[5px] bg-primary h-full object-cover object-center ${slide.default ? 'active-slide' : ''}`} src={slide.src} alt={slide.alt} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Test