import React, { Fragment, useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { UseAlbums } from "../../api/albumsList";
import { UseGetUsers } from "../../api/usersList";
import UserModal from "../../modal/UserModal";

const UsersLoaded = () => {
  const [show, setShow] = useState<boolean>(false);
  const [albumId, setAlbumId] = useState<number | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const usersData = UseGetUsers();
  const albumsData = UseAlbums();

  const toggleModal = (id: number) => {
    setShow(!show);
    setAlbumId(id);

    return albumId;
  };

  return (
    <Fragment>
      <Row>
        {usersData.map(({ id, username }, index) => (
          <Col md={4} key={index}>
            <ListGroup>
              <ListGroup.Item variant="dark">
                <h3>{username}</h3>
              </ListGroup.Item>
              {albumsData
                .filter(({ userId }) => id === userId)
                .map(({ title, id }, albumsIndex) => (
                  <ListGroup.Item key={albumsIndex}>
                    <div className="title-wrapper">
                      <span>{title}</span>
                      <Button variant="primary" onClick={() => toggleModal(id)}>
                        Voir
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
        ))}
      </Row>
      <UserModal {...{ show, handleClose, albumId }} />
    </Fragment>
  );
};

export default UsersLoaded;
