import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Button, Form, Row, Col, FormGroup, Label, Input,
} from 'reactstrap';
import { getSignup } from '../../Redux/Actions/AsyncAction';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    dispatch(getSignup(userData));
    navigate('/posts');
  };
  return (
    <Form onSubmit={submitHandler}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleName">
              Name
            </Label>
            <Input
              onChange={nameHandler}
              id="exampleName"
              name="name"
              placeholder="ex. johndoe"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">
              Email
            </Label>
            <Input
              onChange={emailHandler}
              id="exampleEmail"
              name="email"
              placeholder="ex. johndoe@yahoo.com"
              type="email"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">
              Password
            </Label>
            <Input
              onChange={passwordHandler}
              id="examplePassword"
              name="password"
              placeholder="ex. 1234"
              type="password"
            />
          </FormGroup>
        </Col>
      </Row>
      <Button>
        Sign up
      </Button>
    </Form>
  );
}
export default SignUp;
