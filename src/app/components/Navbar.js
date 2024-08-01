
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import { FaGlobe } from 'react-icons/fa';
import './Navbar.css';
import logo from '../../../public/logo.png';
import useScrollDirection from './useScrollDirection';

const CustomNavbar = () => {
  const scrollDirection = useScrollDirection();

  return (
    <Navbar
      bg="#3F485E"
      variant="dark"
      expand="lg"
      className={`custom-navbar ${scrollDirection === 'down' ? 'navbar-hidden' : 'navbar-visible'}`}
    >
      <div className="container-fluid">
        <Navbar.Brand href="#">
          <Image src={logo} width={260} height={50} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="nav-item">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-item">About Us</Nav.Link>
            <Nav.Link href="#services" className="nav-item">Services</Nav.Link>
            <Nav.Link href="#partners" className="nav-item">Partners</Nav.Link>
            <Nav.Link href="#contact" className="nav-item">Contact Us</Nav.Link>
          </Nav>
          <div className="nav-right">
            <Dropdown align="end" className="lang-dropdown">
              <Dropdown.Toggle variant="link" id="dropdown-basic" className="lang-toggle">
                <FaGlobe size={20} className="lang-icon" />
                <span style={{ marginLeft: '10px' }} className="lang-text"> English</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="lang-menu">
                <Dropdown.Item href="#english">English</Dropdown.Item>
                <Dropdown.Item href="#arabic">Arabic</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="outline-light" className="auth-button register-button">Register</Button>
            <Button variant="light" className="auth-button login-button">Login</Button>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
