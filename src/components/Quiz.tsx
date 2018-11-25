import * as React from "react";
import { observer } from 'mobx-react';
import { store } from '../store';
import { filterBubbleTheme } from "../filterBubbleTheme";
import CardContent from "@material-ui/core/CardContent";
import { CardActionArea } from "../../node_modules/@material-ui/core";
import { Button, MuiThemeProvider } from "@material-ui/core";
import { Link } from "react-router-dom";

const pageStyle = {
    marginTop:"5%",
    marginBottom: "5%",
    marginLeft:"10%",
    width: "80%",
    height:"90%",
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
    height: "14%",
    marginTop: "1%",
    fontSize: "2.5vh",
    marginBottom: "2.5%"
};

const defaultQuizAnswerStyle = {
    width: "99%",
    marginLeft: "0.5%",
    height: "19%",
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

const selectedQuizPromptStyle = {
    width: "100%",
    height: "19%",
    paddingLeft: "3.5%",
    paddingRight: "3.5%",
    paddingTop: "1%",
    paddingBottom: "1%",
    fontSize: "3.5vh",
    marginTop: "1px",
    borderRadius: "3px",
    color: "#000000",
    backgroundColor: "#5ddef4"
};

/**
 * The current user-defined response INDEX to the currently prompted quiz question.
 */
let currentAnswerSelection = null;

@observer
export class Quiz extends React.Component {

    /**
     * Updates the current answer selection to the provided index. Forces a re-render.
     * 
     * @param index The index that was selected.
     */
    updateAnswerSelection(index) {
        currentAnswerSelection = index;

        this.forceUpdate();
    }

    /**
     * Pushes the current answer's ideal selection to the store's ideal choices.
     */
    saveQuizChoice() {
        if (currentAnswerSelection == null) {
            // Do nothing; there is nothing to save!
            return;
        }

        store.currentQuizChoices.push(store.getQuestion().answers[currentAnswerSelection].ideal);
        console.log(store.currentQuizChoices);

        currentAnswerSelection = null;
    }

    render() {
        const curQuestion = store.getQuestion();
        const buttonLabelText = store.hasNextQuestion() ? "Next Question" : "Submit Quiz";

        let wrappedButton = 
            <MuiThemeProvider theme={filterBubbleTheme}>
                <Button style={nextQuestionButtonStyle} variant="contained" color="secondary" onClick={this.saveQuizChoice} disabled={currentAnswerSelection == null}>
                    {buttonLabelText}
                </Button>
            </MuiThemeProvider>;
        if (!store.hasNextQuestion()) {
            wrappedButton = <Link to="/postQuiz">{wrappedButton}</Link>;
        }

        return (
            <div style={pageStyle}>
                <div style={quizHeader}>
                    <div style ={quizTitleInfo}>
                        {"Prompt " + (store.currentQuizChoices.length + 1) + " of 5" /*Ideally this wouldn't be hard-coded. But I'm treating this as a hackathon project LUL*/}
                    </div>
                    {curQuestion.prompt}
                </div>
                { Object.keys(curQuestion.answers).map(val => (
                    <CardActionArea style={currentAnswerSelection === val ? selectedQuizPromptStyle : defaultQuizAnswerStyle} onClick={() => { this.updateAnswerSelection(val); }}>
                        <CardContent>
                            {curQuestion.answers[val].response}
                        </CardContent>
                    </CardActionArea>
                ))}
                {wrappedButton}
            </div>
        );
    }
}