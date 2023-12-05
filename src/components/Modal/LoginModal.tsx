import React, { useState } from 'react';
import { BiX } from 'react-icons/bi';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {
    emailLogin: string;
    password: string;
}

interface PropsLogin {
    setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal = ({ setOpenLogin }: PropsLogin) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const [showPassword, setShowPassword] = useState('password');
    const [showError, setShowError] = useState(false);

    const handlePrev = (e: any) => {
        e.stopPropagation(); // Ngăn chặc sự kiện nổi bọt
    };
    const handleClear = () => {
        setOpenLogin(false);
    };
    const onBlurEmail = () => {
        setShowError(true);
    };

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <div
            className="animate-model-smooth fixed justify-center items-center top-0 left-0 right-0 bottom-0 flex z-10 bg-[#2420215c]"
            onClick={handleClear}
        >
            <div
                className="w-[500px] mx-[10px] bg-white text-center rounded-[14px] overflow-hidden"
                onClick={handlePrev}
            >
                <div className="relative h-14 flex justify-center items-center text-white bg-primary py-[34px]">
                    <h1 className="inline-block text-4xl font-semibold">Login</h1>
                    <BiX
                        className="absolute top-2 right-2 cursor-pointer hover:opacity-80"
                        size={'38px'}
                        color={'#fff'}
                        onClick={() => setOpenLogin(false)}
                    />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="px-10 sd:px-16">
                    <div className="my-10 relative">
                        <input
                            {...register('emailLogin', {
                                required: true,
                                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            })}
                            id="emailLogin"
                            name="emailLogin"
                            placeholder="Email"
                            spellCheck={false}
                            onBlur={onBlurEmail}
                            className="border-b-2 border-[#ABB1BB] focus:border-transparent input-form outline-none w-full text-xl text-primary focus:outline-none py-1"
                        />
                        <span className="absolute w-0 transition-width duration-500 border-input bg-primary rounded-sm h-[2px] top-[36px] left-0"></span>
                        {showError && errors.emailLogin?.type === 'pattern' && (
                            <p className="text-red-600 text-base float-left">Email in valid</p>
                        )}
                        {showError && errors.emailLogin?.type === 'required' && (
                            <p className="text-red-600 text-base float-left">This field is required</p>
                        )}
                    </div>

                    <div className="my-10 relative">
                        <input
                            {...register('password', { required: true, minLength: 6 })}
                            type={showPassword}
                            id="password"
                            required={true}
                            name="password"
                            placeholder="Password"
                            spellCheck={false}
                            className="pr-8 border-b-2 border-[#ABB1BB] focus:border-transparent input-form outline-none w-full text-xl text-primary focus:outline-none py-1"
                        />
                        <span className="absolute w-0 transition-width duration-500 border-input bg-primary rounded-sm h-[2px] top-[36px] left-0"></span>
                        {errors.password?.type === 'required' && (
                            <p className="text-red-600 text-base float-left">This field is required</p>
                        )}
                        {errors.password?.type === 'minLength' && (
                            <p className="text-red-600 text-base float-left">Password must be at least 6 characters</p>
                        )}
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
                    </div>

                    <div className="">
                        <h1 className="text-primary text-[16px] hover:underline cursor-pointer text-left">
                            Forgot Password?
                        </h1>
                    </div>
                    <div className="px-10">
                        <input
                            type="submit"
                            value="Login"
                            className="mt-5 mb-3 w-full h-[50px] rounded-[25px] text-white text-[24px] bg-primary font-semibold cursor-pointer hover:opacity-90 "
                        />
                    </div>
                    <div className="flex justify-center items-center text-[20px] mb-[10px]">
                        <h2>Don't have an account?</h2>
                        <a
                            className="hover:text-red-600 hover:underline text-[24px] font-semibold ml-[6px]"
                            href="/register"
                        >
                            Register
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
