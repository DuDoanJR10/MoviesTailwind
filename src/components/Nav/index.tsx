import { useState } from 'react';
import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay, BiUserCircle } from 'react-icons/bi';
import NavItem from './NavItem'

export const defaultIconSize = '1.875rem';

const items = [
  { label: 'Home', icon: <BiHomeAlt className='md:mr-2' size={defaultIconSize}/>, to: '/'},
  { label: 'Movies', icon: <BiMoviePlay className='md:mr-2' size={defaultIconSize}/>, to: '/movies'},
  { label: 'About', icon: <BiInfoCircle className='md:mr-2' size={defaultIconSize}/>, to: '/about'},
  { label: 'Contact', icon: <BiUserCircle className='md:mr-2' size={defaultIconSize}/>, to: '/contact'},
]

const NavItemContainer = () => (
  <>
    {items.map((item, index) => {
      return (
        <NavItem key={index} item={item}/>
      )
    })}
  </>
)

const Index = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  return (
    <nav className='col-span-1 bg-cyan-200'>
      <div className='flex md:block mx-4 justify-between items-center'>
        <h4 className='uppercase font-bold text-primary md:px-3 py-4 border-b border-primary text-right md:text-left'>Phimmoi.net</h4>
        <BiMenu className='cursor-pointer md:hidden' size={defaultIconSize} onClick={() => setIsOpenMenu(!isOpenMenu)}/>
      </div>
      <ul className={`mx-4 my-2 ${isOpenMenu ? '' : 'hidden'} md:block`}>
        <NavItemContainer />
      </ul>
    </nav>
  )
}

export default Index;