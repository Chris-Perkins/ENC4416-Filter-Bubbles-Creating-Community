import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
