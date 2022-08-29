import AuthButtons from "../../components/AuthButtons"
import Nav from "../../components/Nav"
import Trending from "../../components/Trending"

const About = () => {
  return (
    <div className='grid md:grid-cols-5'>
        <Nav />
        <main className='px-12 py-6 md:col-span-4 bg-cyan-50'>
            <AuthButtons />
            <h1 className='mt-6 text-cyan-900'># Welcome About</h1>
            <Trending />
        </main>
    </div>
  )
}

export default About