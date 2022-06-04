import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Dice from "react-dice-roll";
import "./DiceModal.css";

function DiceModal({ handleRollDice, setShowDiceModal, rolledDice }) {
  const [gotValue, setGotValue] = useState(null);
  const closeDiceDialog = () =>
    setTimeout(() => {
      setShowDiceModal(false);
      setGotValue(null);
    }, 1500);
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
            closeDiceDialog();
          }}
          disabled={rolledDice}
        />
      </Modal.Body>
      <Modal.Footer>
        {gotValue && (
          <p style={{ fontSize: "1.5rem" }}>You got a {gotValue} !</p>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default DiceModal;
