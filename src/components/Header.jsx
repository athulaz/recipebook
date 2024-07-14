import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    
        <Link to={'/'} style={{textDecoration:'none'}}  > 

         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://w7.pngwing.com/pngs/426/730/png-transparent-logo-yellow-font-recipe-logo-art-yellow.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        Recipe Book
          </Navbar.Brand>
        </Container>
      </Navbar>

      </Link>
    </div>
  )
}

export default Header
