import React, { useState } from 'react'
import { BiX } from 'react-icons/bi'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { useFormik } from 'formik'
import * as Yup from 'yup'

interface PropsLogin {
    setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>,
}

const LoginModal = ({ setOpenLogin }: PropsLogin) => {

    const [showPassword, setShowPassword] = useState("password")

    const handlePrev = (e: any) => {
        e.stopPropagation()
    } 
    const handleClear = (e: any) => {
        setOpenLogin(false)
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup
                .string()
                .required('Trường này là bắt buộc!'),
            password: Yup
                .string()
                .required('Trường này là bắt buộc!'),
        }),
        onSubmit: (values) => {
          console.log({values})
          setOpenLogin(false)
        },
    });
    
    
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 flex z-10 bg-[#2420215c]' onClick={handleClear}>
            <div className='w-[400px] m-auto bg-white text-center rounded-[14px] overflow-hidden' onClick={handlePrev}>
                <div className='relative text-primary h-14 flex justify-center items-center'>
                    <h1 className='inline-block text-4xl font-semibold'>Login</h1>
                    <BiX className='absolute top-2 right-2 cursor-pointer hover:opacity-80' size={"38px"} color={"#16405B"} onClick={() => setOpenLogin(false)}/>
                </div>

                <form className="px-10" onSubmit={formik.handleSubmit}>
                    <div className="my-10 relative">
                        <input 
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            type="text" 
                            id='username' 
                            name='username' 
                            required={true} 
                            placeholder='Username' 
                            spellCheck={false} 
                            className='border-b-2 border-[#ABB1BB] focus:border-transparent input-form outline-none w-full text-xl text-primary focus:outline-none py-1' 
                        />
                        <span className='absolute w-0 transition-width duration-500 border-input bg-primary rounded-sm h-[2px] top-[36px] left-0'></span>
                    </div>
    
                    <div className="my-10 relative">
                        <input 
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            type={showPassword}
                            id='password' 
                            required={true} 
                            name='password' 
                            placeholder='Password' 
                            spellCheck={false} 
                            className='pr-8 border-b-2 border-[#ABB1BB] focus:border-transparent input-form outline-none w-full text-xl text-primary focus:outline-none py-1'
                        />
                        {(showPassword === "password") ? (
                            <BsFillEyeSlashFill size={"18px"} color={"#16405B"} className='top-[11px] right-2 absolute cursor-pointer' onClick={() => setShowPassword("text")}/>
                        ) : (
                            <BsFillEyeFill size={"18px"} color={"#16405B"} className='top-[11px] right-2 absolute cursor-pointer' onClick={() => setShowPassword("password")}/>
                        )}
                        <span className='absolute w-0 transition-width duration-500 border-input bg-primary rounded-sm h-[2px] top-[36px] left-0'></span>
                    </div>
                    <div className="float-left">
                        <h1 className='text-primary text-[16px] hover:underline cursor-pointer '>Forgot Password?</h1>
                    </div>
                    <div className="px-10">
                        <input 
                            type="submit" 
                            value="Login" 
                            className='mt-5 mb-6 w-full h-[50px] rounded-[25px] text-white text-[24px] bg-primary font-semibold cursor-pointer hover:opacity-90 '
                        />
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default LoginModal
