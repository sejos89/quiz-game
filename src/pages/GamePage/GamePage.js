import React, { useEffect, useRef, useState } from "react";
import "./GamePage.css";
import Element from "../components/Element";
import { elements } from "../../resources/_data";
import questions from "../../resources/questions";
import QuestionsModal from "./components/QuestionsModal";
import ResetModal from "./components/ResetModal";
import ScoreModal from "./components/ScoreModal";
import StartGameModal from "./components/StartGameModal";
import FinishGameModal from "./components/FinishGameModal";
import DiceModal from "./components/DiceModal";

export default function GamePage() {
  const [playerName, setPlayerName] = useState("");
  const [showDiceModal, setShowDiceModal] = useState(false);
  const [rolledDice, setRolledDice] = useState(false);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [showStartModal, setShowStartModal] = useState(false);
  const [showFinishGameModal, setShowFinishGameModal] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [diceValue, setDiceValue] = useState(1);
  const [numElem, setNumElem] = useState(0);
  const [score, setScore] = useState({ electron: 0, proton: 0, neutron: 0 });
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  const handleStartGame = (name) => {
    setShowStartModal(false);
  };

  const handleRollDice = (value) => {
    setNumElem(numElem + value);
    setDiceValue(value);
    setRolledDice(true);
  };

  const handleCloseQuestionModal = () => {
    goNextQuestion();
    setShowQuestionModal(false);
  };

  const handleFinishGame = () => {
    setShowFinishGameModal(false);
    setShowScore(true);
  };

  const handleResetModal = () => {
    restartTest();
    setShowResetModal(false);
  };

  const handleShowQuestionModal = () => setShowQuestionModal(true);
  const handleShowResetModal = () => setShowResetModal(true);
  const handleShowFinishGameModal = () => setShowFinishGameModal(true);

  let allQuestions = useRef([]);

  const goNextQuestion = () => {
    if (numElem === elements.length - 2) {
      setShowScore(true);
    } else {
      setRolledDice(false);
      if (questionAnswered) {
        setQuestionAnswered(false);
        setChosenAnswer(null);
      } else {
        setScore({
          neutron: score.neutron !== 0 ? score.neutron - 1 : score.neutron,
          proton: score.proton,
          electron: score.electron,
        });
      }
    }
  };

  const restartTest = () => {
    if (showScore) setShowScore(false);
    setQuestionAnswered(false);
    setScore({
      electron: 0,
      proton: 0,
      neutron: 0,
    });
    shuffleQuestions();
    setNumElem(1);
  };

  const handleAnswerOptionClick = (chosenAnswer, correctAnswer) => {
    if (chosenAnswer === correctAnswer) {
      setScore({
        electron: score.electron + 5,
        proton: score.proton + 5,
        neutron: score.neutron + 5,
      });
    } else {
      setScore({
        neutron: score.neutron,
        electron: score.electron !== 0 ? score.electron - 1 : score.electron,
        proton: score.proton,
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
          rolledDice={rolledDice}
        />
      );
    }
    return items;
  };

  useEffect(() => {
    setShowStartModal(true);
    for (const property in questions) {
      allQuestions.current = allQuestions.current.concat(
        questions[property].questions
      );
    }
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    allQuestions.current = allQuestions.current.sort(
      (a, b) => 0.5 - Math.random()
    );
  };

  return (
    <div className="wrapper">
      <div id="table">
        {showDiceModal ? (
          <DiceModal
            handleRollDice={handleRollDice}
            setShowDiceModal={setShowDiceModal}
            rolledDice={rolledDice}
          />
        ) : null}
        {showStartModal ? (
          <StartGameModal
            handleStartGame={handleStartGame}
            setPlayerName={setPlayerName}
          />
        ) : null}
        {showScore ? (
          <ScoreModal
            score={score}
            restartTest={restartTest}
            setShowScore={setShowScore}
            playerName={playerName}
          />
        ) : null}
        {showResetModal ? (
          <ResetModal
            handleReset={handleResetModal}
            setShowResetModal={setShowResetModal}
          />
        ) : null}

        {showFinishGameModal ? (
          <FinishGameModal
            handleFinishGame={handleFinishGame}
            setShowFinishGameModal={setShowFinishGameModal}
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
          {!showStartModal && (
            <p className="particles-won">
              {playerName || "You"} won{" "}
              <span className="bold">{score.electron}</span> Electrons,{" "}
              <span className="bold">{score.proton}</span> Protons and{" "}
              <span className="bold">{score.neutron}</span> Neutrons
              <img
                className="electron-icon"
                src={`${process.env.PUBLIC_URL}/assets/electron.svg`}
                width="30"
                alt="electron"
              ></img>
            </p>
          )}
          <img
            src={`${process.env.PUBLIC_URL}/assets/chem-game.png`}
            width="120"
            alt="electron"
          ></img>
          <button
            disabled={rolledDice}
            className={`dice-button ${rolledDice ? "reset-disabled" : ""}`}
            variant="secondary"
            onClick={() => setShowDiceModal(true)}
          >
            Roll the dice
          </button>
        </div>
        <div id="manageGame">
          <button
            disabled={numElem === 1}
            className={`reset-button ${numElem === 1 ? "reset-disabled" : ""}`}
            variant="secondary"
            onClick={handleShowFinishGameModal}
          >
            Finish Game
          </button>
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
