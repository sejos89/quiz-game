import React from "react";
import { Button, Modal } from "react-bootstrap";

function ScoreModal({ score, restartTest, setShowScore }) {
  return (
    <Modal
      show={true}
      onHide={() => setShowScore(false)}
      animation={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>You have finished the game!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Congratulations! You have won{" "}
        <span className="bold">{score.electron}</span> electrons,{" "}
        <span className="bold">{score.proton}</span>
        protons and <span className="bold">{score.neutron}</span> neutrons!
        Would you like to play again?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={restartTest}>
          Reset Game
        </Button>
        <Button variant="secondary" onClick={() => setShowScore(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ScoreModal;
