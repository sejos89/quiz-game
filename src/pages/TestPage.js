import React, { useContext, useEffect, useState } from "react";
import "./TestPage.css";
import { AppContext } from "../context/AppContext";
import Navigation from "./components/Navigation";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [chosenAnswer, setChosenAnswer] = useState(null);
  const { toggleTheme } = useContext(AppContext);
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
      <div className="testpage">
        <Navigation changeTopic={onChangeTopic} />
        <div
          className="test"
          style={toggleTheme ? { backgroundColor: "#f3e3e1" } : {}}
        >
          {showScore ? (
            <div className="score-section">
              <p style={toggleTheme ? { color: "black" } : {}}>
                You scored {score} out of {topic.questions.length}
              </p>
              <button className="next-button" onClick={restartTest}>
                Restart test
              </button>
            </div>
          ) : (
            <>
              <div className="question-section">
                <p style={toggleTheme ? { color: "black" } : {}}>
                  Current field: {topic.title}
                </p>
                <div className="question-header-footer">
                  <div
                    className="question-count"
                    style={toggleTheme ? { color: "black" } : {}}
                  >
                    <span style={toggleTheme ? { color: "black" } : {}}>
                      Question {currentQuestion + 1}
                    </span>
                    /{topic.questions.length}
                  </div>
                  <div className="question-img-header-footer">
                    <img src="https://i.ibb.co/S0VJbQv/chem-game-trasnsparent.png" alt="random"/>
                  </div>
                </div>
                <div
                  className="question-text"
                  style={toggleTheme ? { color: "black" } : {}}
                >
                  {topic.questions[currentQuestion].question}
                </div>
              </div>
              <div className="answer-section">
                {topic.questions[currentQuestion].answers.map(
                  (answer, index) => (
                    <button
                      disabled={questionAnswered}
                      className={
                        index ===
                          topic.questions[currentQuestion].correctAnswerIndex &&
                        questionAnswered
                          ? "noHover correct"
                          : index === chosenAnswer &&
                            index !==
                              topic.questions[currentQuestion]
                                .correctAnswerIndex &&
                            questionAnswered
                          ? "noHover incorrect"
                          : questionAnswered
                          ? "noHover"
                          : ""
                      }
                      style={
                        toggleTheme
                          ? { backgroundColor: "#f3e3e1", color: "black" }
                          : {}
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
                  )
                )}
              </div>
              <br />
              <div className="question-header-footer">
                <div className="question-img-header-footer">
                  <img src="https://i.ibb.co/qd7VCSY/uni-granada-transparent.png" alt="random2" />
                </div>
                <button className="next-button" onClick={goNextQuestion}>
                  Next Question
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
