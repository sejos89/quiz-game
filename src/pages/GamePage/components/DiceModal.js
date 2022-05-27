import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Dice from "react-dice-roll";
import "./DiceModal.css";

function DiceModal({ handleRollDice, setShowDiceModal, rolledDice }) {
  const [gotValue, setGotValue] = useState(null);
  return (
    <Modal show={true} onHide={() => {}} animation={false} centered>
      <Modal.Header>
        <Modal.Title>Click on the dice to roll it!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="dice-modal-body">
        <Dice
          onRoll={(value) => {
            handleRollDice(value);
            setGotValue(value);
          }}
          disabled={rolledDice}
        />
        {gotValue && (
          <p style={{ marginTop: "2rem", fontSize: "1.3rem" }}>
            You got a {gotValue} !
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={!rolledDice}
          variant="secondary"
          onClick={() => {
            setShowDiceModal(false);
            setGotValue(null);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DiceModal;
