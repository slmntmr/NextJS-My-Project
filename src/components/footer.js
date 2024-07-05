import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container className="py-3">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
