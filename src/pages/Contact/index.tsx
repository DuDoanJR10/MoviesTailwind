import Nav from "../../components/Nav"
import Profile from "./Profile"

const Contact = () => {
  return (
    <div className='grid md:grid-cols-5'>
        <Nav />
        <main className='px-12 py-6 md:col-span-4 bg-cyan-50'>
            <Profile />
        </main>
    </div>
  )
}

export default Contact