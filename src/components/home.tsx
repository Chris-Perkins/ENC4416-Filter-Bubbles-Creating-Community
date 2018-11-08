import * as React from "react";
import {
    Jumbotron,
    Container,
} from "reactstrap";
import { Quiz } from "./Quiz";

const pageStyle = {
    marginTop:"2.5%",
    marginLeft:"2.5%",
    width:"95%",
    height:"90%",
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
            <div style={pageStyle}>
                <Quiz />
            </div>
        );
    }
}