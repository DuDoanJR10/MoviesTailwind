import { useRef, useState } from "react"
import RegisterModal from '../Modal/RegisterModal'

const AuthButtons = () => {
  const [openModal, setOpenModal] = useState(false)
  const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>
  
  return (
    <>
      <div className='flex sm:justify-end justify-center items-center'>
        <button className='transition-all duration-300 btn mr-2'>Login</button>
        <button className='transition-all duration-300 btn' onClick={() => setOpenModal(true)}>Register</button>
      </div>
      {openModal && (
        <RegisterModal modalRef={modalRef} setOpenModal={setOpenModal} />
      )}
    </>
  )
}

export default AuthButtons