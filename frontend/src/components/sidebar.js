import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Placeholder from 'react-bootstrap/Placeholder';

import "../CSS/sidebar.css";
import { useContext } from 'react';
import { WeatherContext } from '../WeatherContext';


function Sidebar() {

  const { loading, error, data, handleLocationChange } = useContext(WeatherContext);
  const [inputValue, setInputValue] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    handleLocationChange(inputValue);
  };


  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);



  if (loading) return (
    <Navbar expand="lg" className="bg-body-tertiary flex-column side-bar">
      <Container fluid className='d-flex flex-column'>
        <Placeholder as={Navbar.Brand} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="flex-column">
          <Form>
            <Placeholder as={Form.Control} xs={6} animation="glow" />
            <Placeholder as={Button} variant="outline-dark" xs={6} animation="glow" />
          </Form>
        </Navbar.Collapse>
        <Card className='mt-5' border="secondary" bg='dark' text='light' style={{ width: '15rem' }}>
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
          </Card.Body>
          <ListGroup className="list-group-flush" bg='dark' text='light'>
            <Placeholder as={ListGroup.Item} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={ListGroup.Item} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={ListGroup.Item} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={ListGroup.Item} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
          </ListGroup>
          <Placeholder animation="glow" className='p-5' variant="bottom" style={{ height: '300px' }}>
            <Placeholder xs={6} />
          </Placeholder>
        </Card>
      </Container>
    </Navbar>
  );


  if (error) return <p>Error :|</p>


  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary flex-column side-bar ">
        <Container fluid className='d-flex flex-column'>
          <Navbar.Brand className='d-flex mb-2' href="#"><i className="bi bi-geo-alt me-2 fs-1"></i><p className='fs-1'>Location</p></Navbar.Brand>
              <Form className="d-flex flex-column" style={{ width: '15rem' }} onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  placeholder="eg. New Delhi"
                  className="me-2 mb-2"
                  aria-label="Search"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button variant="outline-dark" type='submit' disabled={loading}>Search</Button>
              </Form>
          {
            <div>
              <Card className='mt-5' border="secondary" bg='dark' text='light' style={{ width: '15rem' }}>
                <Card.Body>
                  <Card.Title className='t-index fs-4'>Thermal Index</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush" bg='dark' text='light' key={data.id}>
                  <ListGroup.Item action variant="light"><span>max</span><i className="bi bi-thermometer-high fs-3"></i><span className='fs-3 mx-4 px-2 '>{data.maxtemp_c}°c</span></ListGroup.Item>
                  <ListGroup.Item action variant="light"><span>min</span><i className="bi bi-thermometer-low fs-3"></i><span className='fs-3 mx-4 px-2 '>{data.mintemp_c}°c</span></ListGroup.Item>
                  <ListGroup.Item action variant="light"><span>avg</span><i className="bi-thermometer-half fs-3"></i><span className='fs-3 mx-4 px-2 '>{data.avgtemp_c}°c</span></ListGroup.Item>
                </ListGroup>
                <Card.Img className='p-5' variant="bottom" src={data.condition_icon || "image loading"} />
              </Card>
            </div>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Sidebar;
