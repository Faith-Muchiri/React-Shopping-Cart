 import React from 'react'
 import {Container, Button, Nav, Navbar as BootsrapNav} from "react-bootstrap"
 import {NavLink} from "react-router-dom"
 export default function Navbar() {
   return (
     <div>
      <BootsrapNav className='bg-white shadow-sm mb-3'>
        <Container>
          <Nav className='ne-auto'>
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
            <Nav.Link to="/products" as={NavLink}>
              Products
            </Nav.Link>
          </Nav>
          <Button></Button>
        </Container>
      </BootsrapNav>
      </div>
   )
 }
 