import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export function NavbarComp() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to={`/`} as={NavLink}>Anasayfa</Nav.Link>
                        <Nav.Link to={`/about`} as={NavLink}>Hakkımızda</Nav.Link>
                        <Nav.Link to={`/contact`} as={NavLink}>İletişim</Nav.Link>
                        <Nav.Link to={`/blog`} as={NavLink}>Bloglarımız</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;    