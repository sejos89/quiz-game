import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TestPage from "./pages/TestPage";
import TeamPage from "./pages/TeamPage";
import { AppContext } from "./context/AppContext";
import "./App.css";
import NavBar from "./components/NavBar";
import questions from "./resources/questions";

function App() {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [topic, setTopic] = useState(questions.nuclear_chemistry);

  return (
    <AppContext.Provider
      value={{ toggleTheme, setToggleTheme, topic, setTopic }}
    >
      <Router>
        <div className="main-container">
          <NavBar />
          <Route path="/test">
            <TestPage />
          </Route>
          <Route path="/team">
            <TeamPage />
          </Route>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
