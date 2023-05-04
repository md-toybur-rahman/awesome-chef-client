import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { Container } from 'react-bootstrap';
import './Main.css'

const Main = () => {
    return (
        <div style={{backgroundColor: '#0E1317'}}>
            <div className='main-container'>
                <Header></Header>
                <div className='outlet'>
                    <Outlet></Outlet>
                </div>
                <Footer className='footer'></Footer>

            </div>
        </div>
    );
};

export default Main;