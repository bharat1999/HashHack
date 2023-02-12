import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../assets/img/logo.png';

export default function CustomNavbar() {
  return (
    <Navbar bg='transparent' expand='lg'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img src={logo} alt='logo' height='50' width='50' />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
