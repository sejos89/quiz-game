import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import TestPage from "./pages/TestPage/TestPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import { AppContext } from "./context/AppContext";
import "./App.css";
import Navigation from "./components/Navigation";
import questions from "./resources/questions";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  const [topic, setTopic] = useState(questions.nuclear_chemistry);

  return (
    <div className="app-container">
      <AppContext.Provider value={{ topic, setTopic }}>
        <Router>
          <Navigation />
          <main className="main-container">
            <Switch>
              <Route path="/" exact>
                <Redirect to="/test" />
              </Route>
              <Route path="/test">
                <TestPage />
              </Route>
              <Route path="/team">
                <TeamPage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route>
                <Redirect to="/test" />
              </Route>
            </Switch>
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
