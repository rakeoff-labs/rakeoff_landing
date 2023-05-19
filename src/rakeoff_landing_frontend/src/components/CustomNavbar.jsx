import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import github from '../assets/github.png';
import twitter1 from '../assets/twitter1.png';
import { Button } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';


const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
      
<Nav className="ms-auto">
  <Nav.Link
    href="#home"
    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
    onClick={() => onUpdateActiveLink('home')}
  >
    About
  </Nav.Link>
  <Nav.Link
    href="#skills"
    className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
    onClick={() => onUpdateActiveLink('skills')}
  >
    Services
  </Nav.Link>
  <Nav.Link
    href="#projects"
    className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
    onClick={() => onUpdateActiveLink('projects')}
  >
    FAQ
  </Nav.Link>
  <span className="social-icon">
    <a href="#"><img src={github} alt="" /></a>
    <a href="#"><img src={twitter1} alt="" /></a>
  </span>
  <Button
    as="a"
    href="https://app.rakeoff.io/"
    colorScheme="red"
    size="lg"
    mt={8}
    rightIcon={<FaArrowRight color="#ffffff" />}
    bgGradient="linear(to-r, #FF3366, #FF0080)"
    _hover={{ bgGradient: "none", bg: "#FF0080" }}
  >
    Launch dApp
  </Button>
</Nav>

// ...

<nav className="navbar">
  <div className="container">
    <Nav className="ms-auto">
      {/* Nav links */}
    </Nav>
  </div>
</nav>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default CustomNavbar;
