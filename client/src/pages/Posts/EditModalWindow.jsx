import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { editThisPost } from '../../Redux/Actions/AsyncAction';
import './styles.css';

Modal.setAppElement('#root');
function EditModalWindow({ id, title, text }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [input, setInput] = useState({ title, text });
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editHandler = () => {
    dispatch(editThisPost(id, input));
  };
  return (
    <div>

      <Button className="my-1" color="warning" onClick={() => setModalIsOpen(true)} type="button">Edit note</Button>
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
                <Label for="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={inputHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label for="text">Text</Label>
                <Input
                  id="text"
                  type="textarea"
                  name="text"
                  value={input.text}
                  onChange={inputHandler}
                />
              </FormGroup>
              <Button
                color="success"
                onClick={() => {
                  setModalIsOpen(false);
                  editHandler();
                }}
                type="button"
              >
                Submit

              </Button>
            </Form>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}
EditModalWindow.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default EditModalWindow;
