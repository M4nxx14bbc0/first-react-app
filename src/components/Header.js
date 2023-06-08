import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <header>
        <Navbar bg="primary" expand="xl" sticky='top'>
            <Container>
                <Navbar.Brand className='text-light fs-4 align-items-center'>
                    <img
                        src="/logo/MoviEngineTransparent.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="MovieEngine Logo">
                    </img>{'   '}
                    MovieEngine
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navCollapse'></Navbar.Toggle>
                <Navbar.Collapse id='navCollapse'>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <Nav.Link href='#' className='text-light'>Home</Nav.Link>
                        <Nav.Link href='#cerca' className='text-light'>Cerca</Nav.Link>
                        <Nav.Link href="#contatti" className='text-light'>Contatti</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

export default Header;