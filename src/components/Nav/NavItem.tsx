import { NavLink } from 'react-router-dom';

export interface Item {
  label: string;
  icon: JSX.Element;
  to: string;
}

const NavItem = ({item}: { item: Item }) => {
  let { label, icon, to } = item

  return (
    <NavLink to={to} className={`flex p-2 md:flex-row-reverse justify-end md:justify-end items-center cursor-pointer`}>
      <h3 className='mr-2'>{label}</h3>
      {icon}
    </NavLink>
  )
}

export default NavItem