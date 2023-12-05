import {
    FaFacebookF,
    FaGoogle,
    FaTwitter,
    FaTiktok,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaHeart,
} from 'react-icons/fa';
import logoFooter from '../../../assets/logoMovies.png';
import FormFooter from '../../../components/FormFooter/FormFooter';

const Footer = () => {
    return (
        <footer className="bg-primary text-white w-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 pt-[50px] pb-[10px] mx-[50px] text-[22px] border-b-2 border-white">
                <div className="col-span-1 items-start flex">
                    <div className="md:flex md:justify-start items-start">
                        <div className="flex flex-col justify-start items-center">
                            <img className="w-[30%] md:w-[50%] xl:w-[40%]" src={logoFooter} alt="logo-footer" />
                            <a href="/" className="uppercase block font-semibold text-[26px] mt-[8px]">
                                Phimmoi.net
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="px-[4px] flex justify-center md:justify-start flex-col m-auto">
                        <h2 className="text-[30px]">Address</h2>
                        <p className="flex items-center mb-[15px] mt-[10px]">
                            <FaMapMarkerAlt className="w-[40px] mr-[30px]" />
                            75, Ho Tung Mau, Hanoi, VN
                        </p>
                        <p className="flex items-center mb-[15px]">
                            <FaPhoneAlt className="w-[40px] mr-[30px]" />
                            <a href="tel:+00 999999">+00 999999</a>
                        </p>
                        <p className="flex items-center mb-[15px]">
                            <FaEnvelope className="w-[40px] mr-[30px]" />
                            <a href="mailto:mail@mail.com">dudoanjr@mail.com</a>
                        </p>
                    </div>
                </div>
                <div className="col-span-1">
                    <h2 className="text-[30px]">Contact</h2>
                    <FormFooter />
                </div>
            </div>
            <ul className="flex flex-wrap justify-center cursor-pointer text-[14px] mt-[8px] mx-[50px] h-[40px]">
                <li className="icon-footer">
                    <FaFacebookF />
                </li>
                <li className="icon-footer">
                    <FaGoogle />
                </li>
                <li className="icon-footer">
                    <FaTwitter />
                </li>
                <li className="icon-footer">
                    <FaTiktok className="" />
                </li>
                <li className="icon-footer">
                    <FaInstagram className="" />
                </li>
            </ul>
            <div className="flex justify-center items-center pb-[8px] text-[16px]">
                <h2>Thank You</h2>
                <FaHeart className="ml-[5px] hover:text-red-600" />
            </div>
        </footer>
    );
};

export default Footer;
