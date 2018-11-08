import * as React from "react";
import {
    Jumbotron,
    Container,
} from "reactstrap";

const pageStyle = {
    width:"100%",
    height:"100%",
    backgroundColor:"#FFFF00",
};

export class Quiz extends React.Component {
    render() {
        return (
            <Container style={pageStyle}>
                <h2>Filter Bubbles</h2>
                <a href="www.google.com" target="_blank">Start Quiz</a>
            </Container>
        );
    }
}