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
                <p> HOLY SMOKES UR DUMB </p>
                <a href="www.google.com" target="_blank">LOL</a>
            </Container>
        );
    }
}