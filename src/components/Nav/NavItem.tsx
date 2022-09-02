import { NavLink } from 'react-router-dom';

export interface Props {
  item: {
    icon: JSX.Element;
    to: string;
    label: string;
  },
  onClick: any
}

const NavItem = ({ item, onClick }: Props) => {
  let { label, icon, to } = item

  return (
    <NavLink onClick={onClick} to={to} className={`flex p-2 md:flex-row-reverse justify-end md:justify-end items-center cursor-pointer`}>
      <h3 className='mr-2'>{label}</h3>
      {icon}
    </NavLink>
  )
}

export default NavItem