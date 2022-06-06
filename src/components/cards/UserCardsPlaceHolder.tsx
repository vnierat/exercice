import React, { Fragment } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

const UserCards = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item variant="dark">...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item variant="dark">...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item variant="dark">...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserCards;
