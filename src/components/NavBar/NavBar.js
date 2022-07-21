import './NavBar'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.scss'

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
        <div>
        <button className='BotonCarrito'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
</button>
</div>
    
    </Navbar>
    </div> 
  );
}

export default NavBar;