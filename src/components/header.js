"use client";

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../styles/header.module.css'; // Stil dosyasının doğru yolu

const Header = () => {
  return (
    <Navbar expand="lg" className={styles.navbarCustom}>
      <Container>
        <Navbar.Brand href="#home">HEADER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/main/products">Products</Nav.Link>
            <Nav.Link as={Link} href="/main/profile">Profile</Nav.Link>
            <Nav.Link as={Link} href="/foods">Food list</Nav.Link>
            <Nav.Link as={Link} href="/resume">Resume</Nav.Link> {/* Resume sayfası bağlantısı */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
