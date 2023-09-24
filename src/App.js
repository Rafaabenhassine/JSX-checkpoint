import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Card, Col, Row, Tab, Tabs } from 'react-bootstrap';
import Price from './Components/Price';
import Description from './Components/Description';
import Url from './Components/Url';
import Name from './Components/Name';

import Form from 'react-bootstrap/Form';

import Navbar from 'react-bootstrap/Navbar';


function App() {
  const firstName = prompt("enter your name");
  let name="rafaa"
  let lastName=""
  return (
    <div className="App">
    <div>

 <Navbar className="bg-body-tertiary justify-content-between">
          <Form inline>
            
            <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
        >
          <Tab eventKey="home" title="Home">   </Tab>
        
          <Tab eventKey="profile" title="Profile">   </Tab>
        
          <Tab eventKey="contact" title="Contact">   </Tab>
          
      </Tabs>
          </Form>
          
        <img src="https://ecomfrenchtouch.fr/wp-content/uploads/vendre-en-ligne.jpg" alt="image" style={{width: "300px", height: "100px"  }}/>
          
          <Form inline>
            <Row>
            <Col xs="auto">
              <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
            
          </Col>
        </Row>
          </Form>
        </Navbar>
      
        <div className=''>
          <>
            <Button variant="light">HOME |</Button>{' '}
            <Button variant="primary">Telephonnes Portables</Button>{' '}
            <Button variant="secondary">Pc Portables</Button>{' '}
            <Button variant="success">Claviers</Button>{' '}
            <Button variant="warning">Casques & Ecouteurs</Button>{' '}
            <Button variant="danger">Souris</Button>{' '}
            <Button variant="info">Claviers</Button>{' '}
            <Button variant="light">Consoles</Button>{' '}
            
          </>
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
          <img src ="https://www.pngall.com/wp-content/uploads/5/Hello-PNG-Picture.png"  alt = "Description" />;
          
          <i style={{color:"rgb(88 199 250 / 100%)"}}>the ultimate iphone 14 is here {firstName?firstName:"user"}</i>;
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;