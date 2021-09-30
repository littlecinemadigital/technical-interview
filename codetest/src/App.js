import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Exercise1 from "./components/Exercise-1";
import Exercise2 from "./components/Exercise-2";
import Exercise3 from "./components/Exercise-3";
import Exercise5 from "./components/Exercise-5";
import Exercise6 from "./components/Exercise-6";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Button variant="contained">
          <Link to="/">Home</Link>
        </Button>

        <Button variant="contained">
          <Link to="/exercise-1">Exercise 1</Link>
        </Button>
        <Button variant="contained">
          <Link to="/exercise-2">Exercise 2</Link>
        </Button>
        <Button variant="contained">
          <Link to="/exercise-3">Exercise 3</Link>
        </Button>
        <Button variant="contained">
          <Link to="/exercise-5">Exercise 5</Link>
        </Button>
        <Button variant="contained">
          <Link to="/exercise-6">Exercise 6</Link>
        </Button>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/exercise-1">
            <Exercise1 />
          </Route>
          <Route path="/exercise-2">
            <Exercise2 />
          </Route>
          <Route path="/exercise-3">
            <Exercise3 />
          </Route>
          <Route path="/exercise-5">
            <Exercise5 />
          </Route>
          <Route path="/exercise-6">
            <Exercise6 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="main">
      <h2>Home</h2>
      <p>Please click one of the above links to see code tests.</p>
    </div>
  );
}
