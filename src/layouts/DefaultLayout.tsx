import { Outlet } from "react-router-dom"
import Nav from "../components/Nav/Nav"

const DefaultLayout = () => {
  return (
    <div className='grid md:grid-cols-5'>
        <Nav />
        <main className='px-12 py-6 bg-cyan-50 md:col-span-4 col-span-1'>
          <Outlet />
        </main>
    </div>
  )
}
  
export default DefaultLayout