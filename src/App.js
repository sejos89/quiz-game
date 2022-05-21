import React, { useState } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import TestPage from "./pages/TestPage/TestPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import { AppContext } from "./context/AppContext";
import "./App.css";
import Navigation from "./components/Navigation";
import questions from "./resources/questions";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import ScrollToTop from "./ScrollToTop";
import GamePage from "./pages/GamePage/GamePage";

function App() {
  const [topic, setTopic] = useState(questions.nuclear_chemistry);

  return (
    <div className="app-container">
      <AppContext.Provider value={{ topic, setTopic }}>
        <HashRouter>
          <ScrollToTop>
            <Navigation />
            <main className="main-container">
              <Switch>
                <Route path="/" exact>
                  <Redirect to="/test" />
                </Route>
                <Route path="/test">
                  <TestPage />
                </Route>
                <Route path="/game">
                  {window.screen.width >= 576 ? (
                    <GamePage />
                  ) : (
                    <Redirect to="/test" />
                  )}
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
          </ScrollToTop>
        </HashRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
