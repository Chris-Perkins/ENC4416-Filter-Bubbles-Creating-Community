import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./components/Home";
import { HashRouter as Router, Route } from "react-router-dom";
import { Quiz } from "./components/Quiz";
import { PostQuiz } from "./components/PostQuiz";

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/postQuiz" component={PostQuiz} />
        </div>
    </Router>,
    document.getElementById("example"),
);
