import AuthButtons from '../../../components/AuthButtons/AuthButtons'
import InputSearch from '../../../components/InputSearch/InputSearch'

const Header = () => {
  return (
    <div className='flex sm:justify-between justify-center flex-wrap mb-[16px]'>
        <InputSearch />
        <AuthButtons />
    </div>
  )
}

export default Header