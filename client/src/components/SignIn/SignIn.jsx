import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Button, Form, Row, Col, FormGroup, Label, Input,
} from 'reactstrap';
import { getLogin } from '../../Redux/Actions/AsyncAction';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(getLogin(userData));
    navigate('/posts');
  };
  return (
    <Form onSubmit={submitHandler}>
      <Row form>
        <Col md={6}>

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
        Sign in
      </Button>
    </Form>
  );
}
export default SignIn;
