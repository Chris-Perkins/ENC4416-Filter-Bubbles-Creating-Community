import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography, CardActionArea } from "../../node_modules/@material-ui/core";
import { filterBubbleTheme } from "../filterBubbleTheme";

const quizQuestionStyle = {
    width: "100%",
    paddingLeft: "3.5%",
    paddingRight: "3.5%",
    paddingTop: "1%",
    paddingBottom: "1%",
    fontSize: "3.5vh",
    marginTop: "1px",
    borderRadius: "3px",

    backgroundColor: "#f1f1f1",
    color: "#000000"
};

export class QuizQuestion extends React.Component {
    render() {
        return (
            <CardActionArea style={quizQuestionStyle}>
                <CardContent>
                    {this.props.children}
                </CardContent>
            </CardActionArea>
        );
    }
}