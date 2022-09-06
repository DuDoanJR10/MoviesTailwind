import AuthButtons from '../AuthButtons/AuthButtons'
import InputSearch from '../InputSearch/InputSearch'

const Header = () => {
  return (
    <div className='flex sm:justify-between justify-center flex-wrap mb-[16px]'>
        <InputSearch />
        <AuthButtons />
    </div>
  )
}

export default Header