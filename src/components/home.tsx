import * as React from "react";
import RF from "react-native-responsive-fontsize";
import {
    Jumbotron,
    Container,
} from "reactstrap";
import { Quiz } from "./Quiz";

const pageStyle = {
    marginTop:"2.5%",
    marginLeft:"2.5%",
    width: "95%",
    minHeight:"95%",
    backgroundColor:"rgba(200,200,200,0.2)",
    
    position:"absolute" as "absolute"
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