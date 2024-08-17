import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

const AppModal = ({ show, handleClose, handleDelete }) => {
  return (
    <BootstrapModal show={show} onHide={handleClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>Do you really want to remove this post?</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>It will be deleted entirely from this app.</BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
            Yes, delete this post!
          </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default AppModal;