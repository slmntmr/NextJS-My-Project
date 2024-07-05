"use client";

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../../styles/header.module.css'; // Stil dosyasının doğru yolu

const Menü = () => {
  return (
    <Navbar expand="lg" className={styles.navbarCustom}>
      <Container>
        <Navbar.Brand href="#home">Foods</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/foods/bean">Bean</Nav.Link>
            <Nav.Link as={Link} href="/foods/meat">Meat</Nav.Link>
            <Nav.Link as={Link} href="/foods/rice">Rice</Nav.Link>
            <Nav.Link as={Link} href="/foods">Main Food</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menü;
