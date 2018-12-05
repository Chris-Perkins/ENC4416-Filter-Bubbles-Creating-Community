import * as React from "react";
import { observer } from 'mobx-react';
import { store } from '../store';
import { filterBubbleTheme } from "../filterBubbleTheme";
import CardContent from "@material-ui/core/CardContent";
import { CardActionArea } from "../../node_modules/@material-ui/core";
import { Button, MuiThemeProvider } from "@material-ui/core";
import { Link } from "react-router-dom";
import { observable } from "mobx";
import zIndex from "@material-ui/core/styles/zIndex";
import Container from "reactstrap/lib/Container";

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
    paddingBottom: "2%",
    fontSize: "3.5vh",
    marginTop: "1px",
    borderRadius: "3px",
    color: "#000000",
    backgroundColor: "#5ddef4"
};

const pageBlurStyle = {
    top: "0%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "fixed" as "fixed",
    backgroundColor: "rgba(0, 76, 140, 0.4)",
    zIndex: 1
};

const popupInfoDialogStyle = {
    width: "90%",
    left: "5%",
    top: "10%",
    padding: "5%",
    paddingBottom: "1%",
    position: "absolute" as "absolute",
    backgroundColor: "#303030",
    marginBottom: "10%",
    zIndex: 2,
    borderRadius: "3px"
};

const infoTextStyle = {
    width: "100%",
    minHeight: "80%",
    left: "5%",
    top: "5%",
    marginBottom: "5%",
    color: "#ffffff",
    fontSize: "2vh",
    overflow: "auto" as "auto"
};

const infoButtonStyle = {
    width: "80%",
    height: "14%",
    left: "10%",
    marginTop: "3%",
    fontSize: "2.5vh",
};

const sourceButtons = {
    width: "70%",
    left: "15%",
    fontSize: "2vh",
    height: "10%",
    marginTop: "1%",
    marginBottom: "1%"
};

/**
 * The current user-defined response INDEX to the currently prompted quiz question.
 */

@observer
export class Quiz extends React.Component {

    @observable isPushingResponse = false;
    @observable currentAnswerSelection = null;

    constructor(props, context) {
        super(props, context);

        this.nextButtonPressed = this.nextButtonPressed.bind(this);
        this.updateAnswerSelection = this.updateAnswerSelection.bind(this);
        this.saveQuizChoice = this.saveQuizChoice.bind(this);
    }

    /**
     * Handles "Next" button behavior. 
     * If there is a response, then show a pop-up explaining the response (via component did mount). 
     * If there is not a response, skip straight to the next question.
     */
    nextButtonPressed() {
        if (this.currentAnswerSelection == null) {
            // Do nothing; there is nothing to save.
            return;
        }

        if (store.getQuestion().postSubmitResponse == null) {
            this.saveQuizChoice();
        } else {
            this.isPushingResponse = true;
        }
    }

    /**
     * Updates the current answer selection to the provided index. Forces a re-render.
     * 
     * @param index The index that was selected.
     */
    updateAnswerSelection(index) {
        this.currentAnswerSelection = index;
    }

    /**
     * Pushes the current answer's ideal selection to the store's ideal choices. If the current choice is null, do nothing.
     */
    saveQuizChoice() {
        if (this.currentAnswerSelection == null) {
            // Do nothing; there is nothing to save!
            return;
        }

        store.currentQuizChoices.push(store.getQuestion().answers[this.currentAnswerSelection].ideal);

        this.currentAnswerSelection = null;
        this.isPushingResponse = false;
    }

    render() {
        const curQuestion = store.getQuestion();
        const buttonLabelText = store.hasNextQuestion() ? "Submit Response" : "Submit Quiz";

        let wrappedButton = 
            <MuiThemeProvider theme={filterBubbleTheme}>
                <Button style={nextQuestionButtonStyle} variant="contained" color="secondary" onClick={this.nextButtonPressed} 
                        disabled={this.currentAnswerSelection == null || this.isPushingResponse}>
                    {buttonLabelText}
                </Button>
            </MuiThemeProvider>;
        if (!store.hasNextQuestion() && store.getQuestion().postSubmitResponse == null) {
            wrappedButton = <Link to="/postQuiz">{wrappedButton}</Link>;
        }

        let infoScreenValue = <br />;
        if (this.isPushingResponse) {
            const sources = store.getQuestion().sources;

            let infoNextButton = 
                <Button style={infoButtonStyle} variant="contained" color="secondary" onClick={this.saveQuizChoice} >
                    {store.hasNextQuestion() ? "Next Question" : "Finish Quiz"}
                </Button>;

            if (!store.hasNextQuestion()) {
                infoNextButton = <Link to="/postQuiz">{infoNextButton}</Link>;
            }

            infoScreenValue = 
                <Container>
                    <div style={popupInfoDialogStyle}>
                        <div style={infoTextStyle}>
                            {store.getQuestion().postSubmitResponse}
                        </div>
                        <MuiThemeProvider theme={filterBubbleTheme}>
                            {Object.keys(sources).map((val, index) => (
                                <a href={sources[val]} target="_blank">
                                    <Button style={sourceButtons} color="secondary">
                                        {"[ Source " + (index + 1) + " ]"}
                                    </Button>
                                </a>
                            ))}
                            {infoNextButton}
                        </MuiThemeProvider>
                    </div>
                    <div style={pageBlurStyle} />
                </Container>;
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
                    <CardActionArea disabled={this.isPushingResponse} style={this.currentAnswerSelection === val ? selectedQuizPromptStyle : defaultQuizAnswerStyle} 
                            onClick={() => { this.updateAnswerSelection(val); }}>
                        <CardContent>
                            {curQuestion.answers[val].response}
                        </CardContent>
                    </CardActionArea>
                ))}
                {wrappedButton}
                {infoScreenValue}
            </div>
        );
    }
}