import * as React from "react";
import { filterBubbleTheme } from "../filterBubbleTheme";

const quizQuestionStyle = {
    width: "100%",
    padding: "4%",
    fontSize: "3.5vh",
    marginTop: "1px",
    borderRadius: "3px",

    backgroundColor: "#f1f1f1",
    color: "#000000"
};

export class QuizQuestion extends React.Component {
    render() {
        return (
            <div style={quizQuestionStyle}>
                {this.props.children}
            </div>
        );
    }
}