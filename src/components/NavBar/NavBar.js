import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.scss'
import CarWidget from '../CarWidget/CarWidget';
import {Link} from 'react-router-dom'

function NavBar() { 
  return (
<div> 
  <Link to="/">
    <img src="/assets/mitiendalomaslogo.png" alt="logo" />
    </Link>
 <h1> Mi Tienda Lomas</h1>
    
  
    
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown as={Link} to="/" title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/category/sweater">Sweater</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/remera">
                Remeras
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/vestido">
                Vestidos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="#action5">Preguntas Frecuentes</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button className="BotonBuscar" variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
        <CarWidget />
      </Navbar>

    </div> 
  );
}

export default NavBar;