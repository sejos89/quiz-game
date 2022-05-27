import React from "react";
import { Button, Modal } from "react-bootstrap";

function StartGameModal({ handleStartGame, setPlayerName }) {
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
        neutrons as you can! Each correct question will give you 5 of each one
        of them. If you fail, you will lose 1 electron, and if you skip the
        question, you will lose 1 neutron! ☹. How many of them you think you can
        get? Let's figure it out!
        <br />
        <br />
        One thing else...What is your name??
        <br />
        <br />
        <input
          type="text"
          onChange={(event) => setPlayerName(event.target.value)}
          placeholder="Your name"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleStartGame}>
          Let's start!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StartGameModal;
