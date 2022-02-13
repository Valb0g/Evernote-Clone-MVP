import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { addNewPost } from '../../Redux/Actions/AsyncAction';
import './styles.css';

Modal.setAppElement('#root');
function ModalWindow() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [input, setInput] = useState({ title: '', text: '' });
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewPost(input));
  };
  return (
    <div>
      <Button className="my-1" color="success" onClick={() => setModalIsOpen(true)} type="button">New note</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        closeTimeoutMS={500}
        className="mymodal"
        overlayClassName="myoverlay"
      >

        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label for="title">Заголовок</Label>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  onChange={inputHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label for="text">Текст</Label>
                <Input
                  id="text"
                  type="textarea"
                  name="text"
                  onChange={inputHandler}
                />
              </FormGroup>
              <Button
                color="success"
                onClick={(e) => {
                  setModalIsOpen(false);
                  submitHandler(e);
                }}
                type="button"
              >
                Создать

              </Button>
            </Form>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default ModalWindow;
