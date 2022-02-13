import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button, Col, Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delThisPost } from '../../Redux/Actions/AsyncAction';
import EditModalWindow from './EditModalWindow';

function OnePost({ id, title, text }) {
  const dispatch = useDispatch();
  const delHandler = (arg) => {
    dispatch(delThisPost(arg));
  };

  return (
    <Col xs={4}>
      <Card className="my-5">
        <CardBody>
          <CardTitle className="title">{title}</CardTitle>
          <CardText>{text}</CardText>
          <Row>
            <Col>
              <Button className="my-1" onClick={() => { delHandler(id); }} color="danger">Delete</Button>
            </Col>
            <Col>
              <EditModalWindow id={id} title={title} text={text} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
}
OnePost.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default OnePost;
