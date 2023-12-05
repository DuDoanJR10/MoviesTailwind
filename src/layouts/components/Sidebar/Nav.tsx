import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { defaultIconSize, items } from '../../../contants/contants';
import NavItem from './NavItem';
import logoFooter from '../../../assets/logoMovies.png';

const Nav = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <nav className="col-span-1 bg-cyan-200">
            <div className="flex lg:block justify-between items-center">
                <a
                    href="/"
                    className="flex items-center lg:ml-[8px] ml-[16px] border-b-[1px] border-primary lg:border-none text-6xl"
                >
                    {/* <img className="h-[32px] w-[32px] mr-[6px]" src={logoFooter} alt="logo-header" />
                    <h4 className="uppercase  font-bold text-primary py-4 text-right md:text-left  ">Phimmoi.net</h4> */}
                    NHÓM 5
                </a>
                <hr className="border-primary" />
                <BiMenu
                    className="cursor-pointer lg:hidden translate-x-[-16px]"
                    size={defaultIconSize}
                    onClick={toggleMenu}
                />
            </div>
            <ul className={`my-2 ${isOpenMenu ? '' : 'hidden'} lg:block`}>
                {items.map((item, index) => {
                    return <NavItem key={index} item={item} onClick={toggleMenu} />;
                })}
            </ul>
        </nav>
    );
};

export default Nav;
