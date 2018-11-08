import * as React from "react";
import {
    Jumbotron,
    Container,
} from "reactstrap";
import { Quiz } from "./Quiz";

const pageStyle = {
    width:"100%",
    height:"100%",
    backgroundColor:"#FF0000",
    position:"absolute" as "absolute"
};

const divStyle = {
    width:"100%",
    height:"80%",
    backgroundColor:"#00FF00"
};

const paragraph = {
    color:"#0000FF"
};


export class Home extends React.Component {
    render() {
        return (
            <Container style={pageStyle}>
                <Quiz />
                <a href="www.google.com" target="_blank">Start Quiz</a>
            </Container>
        );
    }
}