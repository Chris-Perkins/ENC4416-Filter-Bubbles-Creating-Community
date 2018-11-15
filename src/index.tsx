import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./components/Home";
import { Quiz } from "./components/Quiz";

ReactDOM.render(
    <Quiz />,
    document.getElementById("example"),
);
