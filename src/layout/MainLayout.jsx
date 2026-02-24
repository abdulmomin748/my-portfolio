import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
             <div className='click-capture'></div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;