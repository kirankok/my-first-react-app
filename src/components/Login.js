import React, { useState } from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap'

const Login = () => {

  const [validated, setValidated] = useState(false);
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const [register, setRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      body: JSON.stringify(register)
    })
      .then(res => res.json())
      .then(json => console.log(json))
    setValidated(true);
  };

  const handleLoginChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleRegisterChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <Row className='mt-3'>
        <Col className='border' xs={5}>
          <h2 className='text-uppercase'>Login Form</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Please enter your email' value={login.email} onChange={handleLoginChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={login.password} onChange={handleLoginChange} name="password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
        <Col xs={{ span: 5, offset: 1 }} className='border'>
          <h2 className='text-uppercase'>Registration Form</h2>
          <Form noValidate onSubmit={handleSubmit} validated={validated}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter first name" value={register.firstName} onChange={handleRegisterChange} name="firstName" />
                <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" type="text" placeholder="Enter last name" value={register.lastName} onChange={handleRegisterChange} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required name="email" type='email' placeholder='Please enter your email' value={register.email} onChange={handleRegisterChange} />
              <Form.Control.Feedback type="invalid">Please provide a valid Email.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control required name="password" type="password" placeholder="Password" value={register.password} onChange={handleRegisterChange} />
              <Form.Control.Feedback type="invalid">Please provide a valid Password.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control required name="confirmPassword" type="password" placeholder="Confirm Password" value={register.confirmAddress} onChange={handleRegisterChange} />
              <Form.Control.Feedback type="invalid">Please provide a valid Confirm Password.</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>

      </Row>
    </Container>
  )
}

export default Login