import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { defaultIconSize, items } from '../../contants/contants';
import NavItem from './NavItem'

const Nav = () => {
  
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <nav className='col-span-1 bg-cyan-200'>
      <div className='flex md:block mx-4 justify-between items-center'>
        <h4 className='uppercase font-bold text-primary md:px-3 py-4 border-b border-primary text-right md:text-left'>Phimmoi.net</h4>
        <BiMenu className='cursor-pointer md:hidden' size={defaultIconSize} onClick={toggleMenu}/>
      </div>
      <ul className={`mx-4 my-2 ${isOpenMenu ? '' : 'hidden'} md:block`}>
        {items.map((item, index) => {
          return (
            <NavItem key={index} item={item} onClick={toggleMenu} />
          )
        })} 
      </ul>
    </nav>
  )
}

export default Nav;