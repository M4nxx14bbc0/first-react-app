import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';

function Footer() {
  return (
    <footer sticky="bottom">
        <Navbar className='text-light' bg="primary" expand="xl" fixed='bottom'>
            <Container>
                <Stack gap={1}>
                    <div>MovieEngine | Via Certosa, 24 - 55045 Famagosta (Milano) ITALIA | C.F. ABC000000000 | P.Iva 000000000</div>
                    <div>info@MovieEngine.it</div>
                    <Row className='justify-content-center column-gap-3'>
                      <NavLink href='facebook.com' sm="auto" as={Col}>
                        <i className='bi bi-facebook'></i>
                        {'  '}Facebook
                      </NavLink>
                      <NavLink href='instagram.com' sm="auto" as={Col}>
                        <i className='bi bi-instagram'></i>
                        {'  '}Instagram
                      </NavLink>
                    </Row>
                    <NavLink>
                      Contatti
                    </NavLink>
                </Stack>
            </Container>
        </Navbar>
    </footer>
  );
}

export default Footer;