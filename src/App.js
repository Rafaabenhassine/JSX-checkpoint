import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Card } from 'react-bootstrap';
import Price from './Components/Price';
import Description from './Components/Description';
import Url from './Components/Url';
import Name from './Components/Name';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  const firstName = prompt("enter your name");
  return (
    <div>

<Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br/>
    <br/>
    <br/>
    <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    <div className='App'>
      
      <Card style={{ width: '25rem'}}>
        
      <Url />
      
      
      <Card.Body>
        <Card.Title>{<Name />}</Card.Title>
        <Card.Title>{<Description />}</Card.Title>
        <Card.Text>{<Price />}</Card.Text>
        <Button variant="primary">ajouter au panier</Button>
      </Card.Body>
      </Card>
      <div>
        <p>hello there</p>;
        <img src ="https://www.pngall.com/wp-content/uploads/5/Hello-PNG-Picture.png"  alt = "Description" />
      </div>
      </div>
    </div>
    
  );
}

export default App;
