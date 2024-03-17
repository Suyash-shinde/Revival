import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Revival</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='m-auto'>
              <Nav.Link href="home">Home</Nav.Link>
              <span className="mx-5"></span> {/* Add space between links */}
              <Nav.Link href="vaccine">Vaccines</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              <Nav.Link href='/login'>
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
