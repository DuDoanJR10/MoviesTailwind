import AuthButtons from "../AuthButtons"
import Header from "../Header"
import Nav from "../Nav"
import Trending from "../Trending"

const Home = () => {
  return (
    <div className='grid md:grid-cols-5'>
        <Nav />
        <main className='px-12 py-6 md:col-span-4 bg-cyan-50'>
            <AuthButtons />
            <Header />
            <Trending />
        </main>
    </div>
  )
}

export default Home