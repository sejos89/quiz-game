import React from "react";
import { Button, Modal } from "react-bootstrap";

function FinishGameModal({ setShowFinishGameModal, handleFinishGame }) {
  return (
    <Modal
      show={true}
      onHide={() => setShowFinishGameModal(false)}
      animation={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Are you sure you want to finish the game?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        If you do so, you will not be able to get more particles!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleFinishGame}>
          Accept
        </Button>
        <Button
          variant="secondary"
          onClick={() => setShowFinishGameModal(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FinishGameModal;
