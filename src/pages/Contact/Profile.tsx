import Me from '../../assets/Me.jpg';
import { FaFacebook, FaFacebookMessenger, FaTwitter, FaTiktok, FaPhoneAlt, FaGoogle, FaHeartbeat } from 'react-icons/fa';
import { BiLoaderCircle } from 'react-icons/bi';
import { useState } from 'react';
import { defaultIconSize } from '../../contants/contants';

const sizeIconProfile = '3rem'

const Profile = () => {
    const [contact, setContact] = useState<boolean>(false);

    const handleLoading = () => {
        setContact(true)
        setTimeout(() => {
        setContact(false)
        }, 500);
    }
    
    return (
        <>
            <div className='flex m-auto w-2/5 sm:w-1/4 rounded-full border-8 border-primary'>
                <img src={Me} className='rounded-full object-cover' alt='Movie'/>
            </div>
            <h1 className='text-cyan-900 text-center mt-2'>Du Doan JR</h1>
            <h3 className='text-center font-semibold'>Front End Developer</h3>
            <div className='md:flex justify-between md:w-6/12 w-5/6 m-auto mt-14 grid grid-cols-4 '>
                <FaFacebook size={sizeIconProfile} className='text-primary cursor-pointer flex m-auto'/>
                <FaFacebookMessenger size={sizeIconProfile} className='text-primary cursor-pointer flex m-auto'/>
                <FaTiktok size={sizeIconProfile} className='text-primary cursor-pointer flex m-auto'/>
                <FaTwitter size={sizeIconProfile} className='text-primary cursor-pointer flex m-auto'/>
            </div>
            <div className='md:flex justify-between mt-16 m-auto sm:grid grid-cols-1 md:grid-cols-2'>
                <div className='md:w-1/2 text-center col-span-1 group'>
                    <FaPhoneAlt size={sizeIconProfile} className='text-primary cursor-pointer flex m-auto mb-4 animate-bounce '/>
                    <a className='no-underline text-5xl first-letter:text-center font-semibold invisible group-hover:visible' href="tel:+00 151515">0368159999</a>
                </div>
                <div className='md:w-1/2 text-center col-span-1 mt-8 md:mt-0 group'>
                    <FaGoogle size={sizeIconProfile} className='text-primary cursor-pointer flex m-auto mb-4 animate-bounce'/>
                    <a className='no-underline text-5xl first-letter:text-center font-semibold invisible group-hover:visible' href="tel:+00 151515">dudoanjr@gmail.com</a>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <button className='btn hover:scale-125 transition ease-linear mt-6' onClick={handleLoading}>
                {contact ? <BiLoaderCircle className='animate-spin' size={defaultIconSize} /> : <span className='flex'>Contact Me <FaHeartbeat className='ml-2' size={defaultIconSize} /></span>}
                </button>
            </div>
        </>
    )
}

export default Profile