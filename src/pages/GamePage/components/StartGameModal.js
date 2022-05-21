import React from "react";
import { Button, Modal } from "react-bootstrap";

function StartGameModal({ setShowStartModal }) {
  return (
    <Modal show={true} animation={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          CHEMGAME
          <img
            className="electron-icon"
            src={`${process.env.PUBLIC_URL}/assets/electron.svg`}
            width="30"
            alt="electron"
          ></img>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Welcome to the CHEMGAME! Try to get as many electrons, protons and
        neutrons as you can! Each correct question will give you 5 of each of
        them, but if you fail, you will get 0! ☹. How many of them you think you
        can get? Let's figure it out!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowStartModal(false)}>
          Let's start!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StartGameModal;
