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
          <Button 
          style={{width: "3rem", height: "3rem", position:"relative"}}
          variant="outline-primary"
          className='rounded-circle'
          >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
          <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
          style={{color:"white", 
          width:"1.5rem", 
          height:"1.5rem",
          position:"absolute",
          bottom:0,
          right:0,
          transform:"translate(25%, 25%)",
          
          }}>0</div>
          </Button>
        </Container>
      </BootsrapNav>
      </div>
   )
 }
 