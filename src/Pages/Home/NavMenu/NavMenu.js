import React from 'react';
import './NavMenu.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Firebase/Hooks/useAuth';

const NavMenu = () => {
  const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Container>
  <Link to='/home' className='logo'> <span className='logo1'>Wood</span><span className='logo2'>Art</span></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/home'>Home</Nav.Link>
      <Nav.Link as={Link} to='/store'>Store</Nav.Link>
      <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
      
      
    </Nav>
    <Nav>
              {user.email && (
                <Navbar.Text className="fw-bold fst-italic">
                  {" "}
                  <span className="name">
                    {" "}
                    Hi, {user?.displayName}
                  </span>
                </Navbar.Text>
              )}
              {user?.email ? (
                <Nav.Link >
                  <button className="logBtn" onClick={logout}>
                    Logout
                  </button>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <button className="logBtn">Login</button>
                </Nav.Link>
              )}
            </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default NavMenu;