import * as React from "react";
import { filterBubbleTheme } from "../filterBubbleTheme";
import { QuizQuestion } from "./QuizQuestion";
import { Button, MuiThemeProvider } from "@material-ui/core";

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

const nextQuestionButtonStyle = {
    width: "100%",
    marginTop: "1%",
    fontSize: "2.5vh"
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
                <MuiThemeProvider theme={filterBubbleTheme}>
                    <Button style={nextQuestionButtonStyle} variant="contained" color="secondary">
                        Next Question
                    </Button>
                </MuiThemeProvider>
            </div>
        );
    }
}