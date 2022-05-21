import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./QuestionsModal.css";

function QuestionsModal({
  handleAnswerOptionClick,
  handleClose,
  allQuestions,
  numElem,
  questionAnswered,
  chosenAnswer,
  setQuestionAnswered,
  setChosenAnswer,
}) {
  return (
    <Modal show={true} onHide={handleClose} animation={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>{allQuestions.current[numElem]?.question}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="answer-section">
          {allQuestions.current[numElem]?.answers.map((answer, index) => (
            <button
              disabled={questionAnswered}
              className={
                index === allQuestions.current[numElem].correctAnswerIndex &&
                questionAnswered
                  ? "noHover correct"
                  : index === chosenAnswer &&
                    index !==
                      allQuestions.current[numElem].correctAnswerIndex &&
                    questionAnswered
                  ? "noHover incorrect"
                  : questionAnswered
                  ? "noHover"
                  : ""
              }
              onClick={(e) => {
                setQuestionAnswered(true);
                setChosenAnswer(index);
                handleAnswerOptionClick(
                  index,
                  allQuestions.current[numElem].correctAnswerIndex
                );
              }}
            >
              {answer}
            </button>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default QuestionsModal;
