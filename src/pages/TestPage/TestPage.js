import React, { useContext, useEffect, useState } from "react";
import "./TestPage.css";
import { AppContext } from "../../context/AppContext";
import NavigationTest from "../components/NavigationTest";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const { topic, setTopic } = useContext(AppContext);

  useEffect(() => {
    restartTest();
  }, [topic]);

  const restartTest = () => {
    setShowScore(false);
    setQuestionAnswered(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  const handleAnswerOptionClick = (chosenAnswer, correctAnswer) => {
    if (chosenAnswer === correctAnswer) {
      setScore(score + 1);
    }
  };

  const goNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < topic.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    setQuestionAnswered(false);
    setChosenAnswer(null);
  };

  const onChangeTopic = (currentTopic) => {
    setTopic(currentTopic);
  };
  return (
    <>
      <div className="test">
        {showScore ? (
          <div className="score-section">
            <p>
              You scored {score} out of {topic.questions.length}
            </p>
            <button className="next-button" onClick={restartTest}>
              Restart test
            </button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <p>
                Field: <NavigationTest changeTopic={onChangeTopic} />
              </p>
              <div className="question-header">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/
                  {topic.questions.length}
                </div>
                <div className="question-img-header">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/chem_game_transparent.png`}
                  />
                </div>
              </div>
              <div className="question-text">
                {topic.questions[currentQuestion].question}
              </div>
            </div>
            <div className="answer-section">
              {topic.questions[currentQuestion].answers.map((answer, index) => (
                <button
                  disabled={questionAnswered}
                  className={
                    index ===
                      topic.questions[currentQuestion].correctAnswerIndex &&
                    questionAnswered
                      ? "noHover correct"
                      : index === chosenAnswer &&
                        index !==
                          topic.questions[currentQuestion].correctAnswerIndex &&
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
                      topic.questions[currentQuestion].correctAnswerIndex
                    );
                  }}
                >
                  {answer}
                </button>
              ))}
            </div>
            <br />
            <div className="question-footer">
              <button className="next-button" onClick={goNextQuestion}>
                Next Question
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
