import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { Container } from 'react-bootstrap';
import './Main.css'

const Main = () => {
    return (
        <Container className='main-container'>
            <Header></Header>
            <div className='outlet'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </Container>
    );
};

export default Main;