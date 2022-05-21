import React, { useEffect, useRef, useState } from "react";
import "./GamePage.css";
import Element from "../components/Element";
import { elements } from "../../resources/_data";
import questions from "../../resources/questions";
import QuestionsModal from "./components/QuestionsModal";
import ResetModal from "./components/ResetModal";
import ScoreModal from "./components/ScoreModal";

export default function GamePage() {
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [numElem, setNumElem] = useState(1);
  const [score, setScore] = useState({ electron: 0, proton: 0, neutron: 0 });
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  // const handleScoreModal = () => {};

  const handleCloseQuestionModal = () => {
    if (questionAnswered) {
      goNextQuestion();
    }
    setShowQuestionModal(false);
  };

  const handleResetModal = () => {
    restartTest();
    setShowResetModal(false);
  };

  const handleShowQuestionModal = () => setShowQuestionModal(true);
  const handleShowResetModal = () => setShowResetModal(true);

  let allQuestions = useRef([]);

  const goNextQuestion = () => {
    if (numElem === elements.length - 2) {
      setShowScore(true);
    } else {
      setNumElem(numElem + 1);
      setQuestionAnswered(false);
      setChosenAnswer(null);
    }
    console.log(score);
  };

  const restartTest = () => {
    if (showScore) setShowScore(false);
    setQuestionAnswered(false);
    setScore({
      electron: 0,
      proton: 0,
      neutron: 0,
    });
    setNumElem(1);
  };

  const handleAnswerOptionClick = (chosenAnswer, correctAnswer) => {
    if (chosenAnswer === correctAnswer) {
      setScore({
        electron: score.electron + 5,
        proton: score.proton + 5,
        neutron: score.neutron + 5,
      });
    }
  };

  const populateElements = (start, end) => {
    let items = [];
    for (let i = start; i <= end; i++) {
      const element = elements[i];
      items.push(
        <Element
          key={i}
          handleShow={handleShowQuestionModal}
          num={i}
          element={element}
          numElem={numElem}
        />
      );
    }
    return items;
  };

  useEffect(() => {
    for (const property in questions) {
      allQuestions.current = allQuestions.current.concat(
        questions[property].questions
      );
    }
    allQuestions.current = allQuestions.current.sort(
      (a, b) => 0.5 - Math.random()
    );
  }, []);

  return (
    <div className="wrapper">
      <div id="table">
        {showScore ? (
          <ScoreModal
            score={score}
            restartTest={restartTest}
            setShowScore={setShowScore}
          />
        ) : null}
        {showResetModal ? (
          <ResetModal
            handleReset={handleResetModal}
            setShowResetModal={setShowResetModal}
          />
        ) : null}
        {showQuestionModal ? (
          <QuestionsModal
            handleAnswerOptionClick={handleAnswerOptionClick}
            handleClose={handleCloseQuestionModal}
            allQuestions={allQuestions}
            numElem={numElem}
            questionAnswered={questionAnswered}
            chosenAnswer={chosenAnswer}
            setQuestionAnswered={setQuestionAnswered}
            setChosenAnswer={setChosenAnswer}
          />
        ) : null}
        {/* Elements 1-4 */}
        {populateElements(1, 4)}
        <div id="information">
          <p className="particles-won">
            You have won <span className="bold">{score.electron}</span>{" "}
            Electrons, <span className="bold">{score.proton}</span> Protons and{" "}
            <span className="bold">{score.neutron}</span> Neutrons
            <img
              className="electron-icon"
              src="/assets/electron.svg"
              width="30"
              alt="electron"
            ></img>
          </p>

          <button
            disabled={numElem === 1}
            className={`reset-button ${numElem === 1 ? "reset-disabled" : ""}`}
            variant="secondary"
            onClick={handleShowResetModal}
          >
            Reset Game
          </button>
        </div>
        {/* Populating elements from 5-57 */}
        {populateElements(5, 57)}
        {/* Lanthanoids split 72-89 */}
        {populateElements(72, 89)}
        {/* Actinoids split 104-119*/}
        {populateElements(104, 118)}
        {/* Lanthenoids 58-71*/}
        {populateElements(58, 71)}
        {/* Actionoids 90-103 */}
        {populateElements(90, 103)}
      </div>
    </div>
  );
}
