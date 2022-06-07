import React, { FC } from "react";
import { Button, Modal } from "react-bootstrap";
import { UseAGallery } from "../../api/galleryList";

interface UserModalProps {
  albumId: number | null;
  show: boolean;
  handleClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const UserModal: FC<UserModalProps> = ({ show, handleClose, albumId }) => {
  const modalData = UseAGallery();

  const pictureProperties = modalData
    .filter(({ id }) => id === albumId)
    .map(({ url, title }) => ({ url, title }));

  const albumTitle = pictureProperties[0]?.title;
  const albumUrl = pictureProperties[0]?.url;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{albumTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="modal-image" src={albumUrl} alt={`${albumId}`} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
