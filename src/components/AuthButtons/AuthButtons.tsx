import { useRef, useState } from "react"
import LoginModal from "../Modal/LoginModal"
import RegisterModal from '../Modal/RegisterModal'

const AuthButtons = () => {
  const [openRegister, setOpenRegister] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>
  
  return (
    <>
      <div className='flex sm:justify-end justify-center items-center'>
        <button className='transition-all duration-300 btn mr-2' onClick={() => setOpenLogin(true)}>Login</button>
        <button className='transition-all duration-300 btn' onClick={() => setOpenRegister(true)}>Register</button>
      </div>
      {openRegister && (
        <RegisterModal modalRef={modalRef} setOpenRegister={setOpenRegister} />
      )}
      {openLogin && (
        <LoginModal setOpenLogin={setOpenLogin} />
      )}
    </>
  )
}

export default AuthButtons