import React from "react";
import { useState } from 'react';
import {Modal, Button } from 'react-bootstrap';

function MessageModal(props) {

  const [show, setShow] = useState(props.show);

  //setShow(true);

  function handleClose()
  {
    setShow(false);
  }

  // Open the modal window.
  function handleShow()
  {
    setShow(true);
  }


  return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.heading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{props.message}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </>
  );
}

export default MessageModal;