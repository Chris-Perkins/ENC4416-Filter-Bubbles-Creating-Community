import * as React from "react";
import {
    Container,
} from "reactstrap";


const pageStyle = {
    margin:"2.5%",
    backgroundColor:"rgba(255,255,255,0.5)",
};

const titleStyle = {
    fontSize: "8vh",
    textAlign: "center" as "center",
    topMargin: "5%"
};

const paragraph = {
    fontSize: "4vh",
    textAlign: "center" as "center"
};

export class Quiz extends React.Component {
    render() {
        return (
            <div style={pageStyle}>
                <p style={titleStyle}>Filter Bubbles</p>
                <a href="www.google.com" target="_blank">go</a>
                <a href="www.google.com" target="_blank">Start Quiz</a>
            </div>
        );
    }
}