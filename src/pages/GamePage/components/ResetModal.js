import React from "react";
import { Button, Modal } from "react-bootstrap";

function ResetModal({ setShowResetModal, handleReset }) {
  return (
    <Modal
      show={true}
      onHide={() => setShowResetModal(false)}
      animation={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Are you sure you want to reset the game?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        If you do so, you will lose your game progress and points.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleReset}>
          Accept
        </Button>
        <Button variant="secondary" onClick={() => setShowResetModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ResetModal;
