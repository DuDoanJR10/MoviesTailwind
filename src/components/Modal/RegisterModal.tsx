import React, { useState } from 'react';
import { BiX } from 'react-icons/bi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

interface PropsRegister {
    modalRef: React.MutableRefObject<HTMLInputElement>;
    setOpenRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterModal = ({ modalRef, setOpenRegister }: PropsRegister) => {
    const [showPassword, setShowPassword] = useState('password');

    const handlePrev = (e: any) => {
        e.stopPropagation(); // Ngăn chặc sự kiện nổi bọt
    };
    const handleClear = (e: any) => {
        setOpenRegister(false);
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Trường này là bắt buộc!').min(3, 'Tối thiểu 3 ký tự!'),
            email: Yup.string()
                .required('Trường này là bắt buộc!')
                // eslint-disable-next-line no-useless-escape
                .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email không hợp lệ!'),
            password: Yup.string().required('Trường này là bắt buộc!').min(6, 'Mật khẩu tối thiểu 6 ký tự!'),
            confirmPassword: Yup.string()
                .required('Trường này là bắt buộc!')
                .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp!'),
        }),
        onSubmit: (values) => {
            console.log({ values });
            setOpenRegister(false);
        },
    });

    return (
        <div
            ref={modalRef}
            className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 bg-[#2420215c] animate-model-smooth  "
            onClick={handleClear}
        >
            <div
                className="w-[500px] mx-[10px] bg-white text-center rounded-[14px] overflow-hidden"
                onClick={handlePrev}
            >
                <div className="relative h-14 flex justify-center items-center text-white bg-primary py-[34px]">
                    <h1 className="inline-block text-4xl font-semibold">Register</h1>
                    <BiX
                        className="absolute top-2  right-2 cursor-pointer hover:opacity-80"
                        size={'38px'}
                        color={'#fff'}
                        onClick={() => setOpenRegister(false)}
                    />
                </div>
                <form className="px-10 sd:px-16" onSubmit={formik.handleSubmit}>
                    <div className="my-10 relative">
                        <input
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            type="text"
                            id="username"
                            name="username"
                            required={true}
                            placeholder="Username"
                            spellCheck={false}
                            className="border-b-2 border-[#ABB1BB] focus:border-transparent input-form outline-none w-full text-xl text-primary focus:outline-none py-1"
                        />
                        <span className="absolute w-0 transition-width duration-500 border-input bg-primary rounded-sm h-[2px] top-[36px] left-0"></span>
                        {formik.errors.username && (
                            <p className="text-red-600 text-base float-left">{formik.errors.username}</p>
                        )}
                    </div>
                    <div className="my-10 relative">
                        <input
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            type="email"
                            id="email"
                            name="email"
                            required={true}
                            placeholder="Email"
                            spellCheck={false}
                            className="border-b-2 border-[#ABB1BB] focus:border-transparent input-form outline-none w-full text-xl text-primary focus:outline-none py-1"
                        />
                        <span className="absolute w-0 transition-width duration-500 border-input bg-primary rounded-sm h-[2px] top-[36px] left-0"></span>
                        {formik.errors.email && (
                            <p className="text-red-600 text-base float-left">{formik.errors.email}</p>
                        )}
                    </div>
                    <div className="my-10 relative">
                        <input
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            type={showPassword}
                            id="password"
                            required={true}
                            name="password"
                            placeholder="Password"
                            spellCheck={false}
                            className="pr-8 border-b-2 border-[#ABB1BB] focus:border-transparent input-form outline-none w-full text-xl text-primary focus:outline-none py-1"
                        />
                        {showPassword === 'password' ? (
                            <BsFillEyeSlashFill
                                size={'18px'}
                                color={'#16405B'}
                                className="top-[11px] right-2 absolute cursor-pointer"
                                onClick={() => setShowPassword('text')}
                            />
                        ) : (
                            <BsFillEyeFill
                                size={'18px'}
                                color={'#16405B'}
                                className="top-[11px] right-2 absolute cursor-pointer"
                                onClick={() => setShowPassword('password')}
                            />
                        )}
                        <span className="absolute w-0 transition-width duration-500 border-input bg-primary rounded-sm h-[2px] top-[36px] left-0"></span>
                        {formik.errors.password && (
                            <p className="text-red-600 text-base float-left">{formik.errors.password}</p>
                        )}
                    </div>
                    <div className="my-10 relative">
                        <input
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            type="password"
                            id="confirmPassword"
                            required={true}
                            name="confirmPassword"
                            placeholder="Confirm password"
                            spellCheck={false}
                            className="pr-8 border-b-2 border-[#ABB1BB] focus:border-transparent input-form outline-none w-full text-xl text-primary focus:outline-none py-1"
                        />
                        <span className="absolute w-0 transition-width duration-500 border-input bg-primary rounded-sm h-[2px] top-[36px] left-0"></span>
                        {formik.errors.confirmPassword && (
                            <p className="text-red-600 text-base float-left">{formik.errors.confirmPassword}</p>
                        )}
                    </div>
                    <input
                        type="submit"
                        value="Register"
                        className="mt-5 mb-3 w-full h-[50px] rounded-[25px] text-white text-[24px] bg-primary font-semibold cursor-pointer hover:opacity-90 "
                    />
                    <div className="flex justify-center items-center text-[20px] mb-[10px]">
                        <h2>Already have an account?</h2>
                        <a className="hover:text-red-600 text-[24px] font-semibold ml-[6px]" href="/login">
                            Login
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterModal;
