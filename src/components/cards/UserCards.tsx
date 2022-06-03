import React, { Fragment } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useGetUsers } from "../../api/usersList";

const UserCards = () => {
  const data = useGetUsers();
  console.log(data);
  return (
    <Fragment>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item variant="dark">...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item variant="dark">...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item variant="dark">...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserCards;
