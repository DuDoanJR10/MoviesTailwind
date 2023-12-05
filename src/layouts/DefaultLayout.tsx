import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Nav from './components/Sidebar/Nav';

const DefaultLayout = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden">
            <Nav />
            <main className="px-12 py-6 bg-cyan-50 md:col-span-4 col-span-1">
                <Outlet />
            </main>
            <div className="footer w-full">
                <Footer />
            </div>
        </div>
    );
};

export default DefaultLayout;
