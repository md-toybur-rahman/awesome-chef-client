import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </Container>
    );
};

export default Main;