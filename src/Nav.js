import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Logout from './Logout';
import './nav.css'
import logo from './images/images.png'
import { SlBasket } from "react-icons/sl";
function AppNav() {

  const cart = useSelector(state => state.cart);
  return (
    <Navbar expand="lg" fixed='top' className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='navbar-brand'>
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>

            <Link to="/cart" className="nav-link">Cart : <font color='blue'>{cart.length}</font>{'  '}
              <SlBasket />
            </Link>

          </Nav>


          <Col xs="auto">
            <Logout />
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;