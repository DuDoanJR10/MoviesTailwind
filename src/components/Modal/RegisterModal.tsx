import React from 'react'
import { BiX } from 'react-icons/bi'

interface PropsRegister {
    modalRef: React.MutableRefObject<HTMLInputElement>,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
}

const RegisterModal = ({ modalRef, setOpenModal }: PropsRegister) => {
    const handlePrev = (e: any) => {
        e.stopPropagation()
    } 

    const handleClear = (e: any) => {
        setOpenModal(false)
    }
    return (
        <div ref={modalRef} className='fixed top-0 left-0 right-0 bottom-0 flex z-10 bg-[#2420215c]' onClick={handleClear}>
            <div className='w-[400px] m-auto bg-white text-center rounded-[14px] overflow-hidden' onClick={handlePrev}>
                <div className='relative text-primary h-14 flex justify-center items-center'>
                    <h1 className='inline-block text-4xl font-semibold'>Register</h1>
                    <BiX className='absolute top-2 right-2 cursor-pointer hover:opacity-80' size={"38px"} color={"#16405B"} onClick={() => setOpenModal(false)}/>
                </div>
                <form className="px-10">
                    <div className="my-10">
                        <input 
                            type="text" 
                            id='username' 
                            name='username' 
                            required={true} 
                            placeholder='Username' 
                            className='w-full text-xl border-b-2 border-[#ABB1BB] text-primary focus:outline-none py-1' 
                            spellCheck={false} 
                        />
                        <span className=''></span>
                        <p className='text-red-600 text-base float-left'>Username is required</p>
                    </div>
                    <div className="my-10">
                        <input 
                            type="email" 
                            id='email' 
                            name='email' 
                            required={true} 
                            placeholder='Email' 
                            spellCheck={false} 
                            className='w-full text-xl border-b-2 border-[#ABB1BB] text-primary focus:outline-none py-1' 
                        />
                        <span className=''></span>
                        <p className='text-red-600 text-base float-left'>Email is not valid</p>
                    </div>
                    <div className="my-10">
                        <input 
                            type="password" 
                            id='password' 
                            required={true} 
                            name='password' 
                            placeholder='Password' 
                            spellCheck={false} 
                            className='w-full text-xl border-b-2 border-[#ABB1BB] text-primary focus:outline-none py-1' 
                        />
                        <span className=''></span>
                        <p className='text-red-600 text-base float-left'>Password must be at least 6 characters</p>
                    </div>
                    <div className="my-10">
                        <input 
                            type="password" 
                            required={true} 
                            placeholder='Confirm password' 
                            spellCheck={false} 
                            className='w-full text-xl border-b-2 border-[#ABB1BB] text-primary focus:outline-none py-1' 
                        />
                        <span className=''></span>
                        <p className='text-red-600 text-base float-left'>Passwords do not match</p>
                    </div>
                    <input 
                        type="submit" 
                        value="Register" 
                        className='mt-5 mb-6 w-full h-[50px] rounded-[25px] text-white text-[20px] bg-primary font-semibold cursor-pointer hover:opacity-90 '
                    />
                </form>
            </div>
        </div>
    )
}

export default RegisterModal