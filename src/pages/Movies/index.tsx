import AuthButtons from "../../components/AuthButtons"
import Nav from "../../components/Nav"
import Trending from "../../components/Trending"

const Movies = () => {
  return (
    <div className='grid md:grid-cols-5'>
        <Nav />
        <main className='px-12 py-6 md:col-span-4 bg-cyan-50'>
            <AuthButtons />
            <h1 className='mt-6 text-cyan-900'># Welcome Movies</h1>
            <Trending />
        </main>
    </div>
  )
}

export default Movies