import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import TestPage from "./pages/TestPage";
import TeamPage from "./pages/TeamPage";
import { AppContext } from "./context/AppContext";
import "./App.css";
import Navigation from "./components/Navigation";
import questions from "./resources/questions";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [toggleTheme, setToggleTheme] = useState(true);
  const [topic, setTopic] = useState(questions.nuclear_chemistry);

  return (
    <div className="app-container">
      <AppContext.Provider
        value={{ toggleTheme, setToggleTheme, topic, setTopic }}
      >
        <Router>
          <Navigation />
          <main className="main-container">
            <Route path="/">
              <Redirect to="/test" />
            </Route>
            <Route path="/test">
              <TestPage />
            </Route>
            <Route path="/team">
              <TeamPage />
            </Route>
          </main>
        </Router>
      </AppContext.Provider>
      <div
        className="background-container"
        style={{
          backgroundImage: `linear-gradient(black, black), url("${process.env.PUBLIC_URL}/assets/periodic_table.PNG")`,
        }}
      ></div>
    </div>
  );
}

export default App;
