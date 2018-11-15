import * as React from "react";
import { filterBubbleTheme } from "../filterBubbleTheme";
import { QuizQuestion } from "./QuizQuestion";

const pageStyle = {
    marginTop:"5%",
    marginLeft:"10%",
    width: "80%",
    maxHeight:"95%",
    position:"absolute" as "absolute",
};

const quizTitleInfo = {
    fontSize:"1.5vh"
};

const quizHeader = {
    marginTop: "0%",
    width: "100%",
    minHeight:"20%",
    padding:"2.5%",
    backgroundColor: filterBubbleTheme.palette.secondary.dark,
    color: filterBubbleTheme.palette.secondary.contrastText,
    fontSize: "4vh",
    borderRadius: "3px",
    fontWeight: "bold" as "bold"
};

export class Quiz extends React.Component {
    render() {
        return (
            <div style={pageStyle}>
                <div style={quizHeader}>
                    <div style ={quizTitleInfo}>
                        PROMPT 1 OF 4
                    </div>
                    How do you feel about doggie dogs?
                </div>
                <QuizQuestion>
                    good
                </QuizQuestion>
                <QuizQuestion>
                    ok
                </QuizQuestion>
                <QuizQuestion>
                    bad
                </QuizQuestion>
            </div>
        );
    }
}