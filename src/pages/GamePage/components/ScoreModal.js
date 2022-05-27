import React from "react";
import { Button, Modal } from "react-bootstrap";

function ScoreModal({ score, restartTest, playerName }) {
  const { electron, neutron, proton } = score;
  return (
    <Modal show={true} onHide={() => {}} animation={false} centered>
      <Modal.Header>
        <Modal.Title>You have finished the game!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Congratulations {playerName}! You have won{" "}
        <span className="bold">{electron}</span> electrons,{" "}
        <span className="bold">{proton}</span> protons and{" "}
        <span className="bold">{neutron}</span> neutrons! You got{" "}
        <span className="bold">{neutron + electron + proton}</span> points in
        total!!
        <br />
        <br />
        Would you like to play again?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={restartTest}>
          Reset Game
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ScoreModal;
