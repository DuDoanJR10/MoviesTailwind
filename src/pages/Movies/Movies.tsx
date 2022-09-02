import AuthButtons from "../../components/AuthButtons/AuthButtons"
import Trending from "../../components/Trending/Trending"

const Movies = () => {
  return (
    <>
      <div className='flex md:justify-end justify-center'>
        <AuthButtons />
      </div>
      <h1 className='mt-6 text-cyan-900'># Welcome Movies</h1>
      <Trending />
    </>
  )
}

export default Movies