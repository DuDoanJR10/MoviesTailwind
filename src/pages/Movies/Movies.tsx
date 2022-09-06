import AuthButtons from "../../components/AuthButtons/AuthButtons"
import Trending from "../../components/Trending/Trending"

const Movies = () => {
  return (
    <>
      <div className='flex md:justify-end justify-center'>
        <AuthButtons />
      </div>
      
      <Trending />
    </>
  )
}

export default Movies