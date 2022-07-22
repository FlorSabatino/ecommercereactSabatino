import './NavBar'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.scss'
import CarWidget from './components/CarWidget/CarWidget';

function NavBar() { 
  return (
    <div>
    <img  src="/assets/mitiendalomaslogo.png" alt="logo"/>
    <h1> Mi Tienda Lomas</h1>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sweater</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Remeras
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Vestidos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Contacto</Nav.Link>
            <Nav.Link href="#action5">Preguntas Frecuentes</Nav.Link>
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
      </Navbar>
      <CarWidget />
    </div> 
  );
}

export default NavBar;