import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./components/Home";
import { HashRouter as Router, Route } from "react-router-dom";
import { Quiz } from "./components/Quiz";

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/quiz" component={Quiz} />
        </div>
    </Router>,
    document.getElementById("example"),
);
