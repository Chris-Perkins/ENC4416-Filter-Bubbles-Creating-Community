import * as React from "react";
import { observer } from 'mobx-react';
import { store } from '../store';
import { Link } from "react-router-dom";
import { filterBubbleTheme } from "../filterBubbleTheme";
import { CardActionArea } from "../../node_modules/@material-ui/core";
import { Button, MuiThemeProvider } from "@material-ui/core";

// TODO: This can be reused if we can access Store static variables.
const filterBubbleKnowledgeLabels = {
    ignorant: 1,
    knowledgable: 2
};
const filterBubbleFeelingLabels = {
    pro: 1,
    neutral: 2,
    anti: 3
};

const pageStyle = {
    marginTop:"5%",
    marginBottom: "5%",
    marginLeft:"10%",
    width: "80%",
    height:"90%",
    position:"absolute" as "absolute",
};

const postQuizHeader = {
    marginTop: "0%",
    width: "100%",
    color: filterBubbleTheme.palette.primary.contrastText,
    fontSize: "4vh",
    fontWeight: "bold" as "bold",
    paddingBottom: "2.5%"
};

const goHomeButtonStyle = {
    width: "100%",
    height: "7.5%",
    marginTop: "1%",
    fontSize: "2.5vh",
    marginBottom: "2.5%"
};

const infoTextStyle = {
    fontSize: "3.5vh",
    textAlign: "left" as "left",
    marginLeft: "5.0%",
    marginRight: "5.0%",
    paddingBottom: "1.5%",
    color: filterBubbleTheme.palette.primary.contrastText
};

const synapsisTextStyle = {
    fontSize: "2.5vh",
    textAlign: "left" as "left",
    marginLeft: "5.0%",
    marginRight: "5.0%",
    marginTop: "2.0%",
    color: filterBubbleTheme.palette.primary.contrastText
};


@observer
export class PostQuiz extends React.Component {
    render() {
        let quizResponse = null;
        const defaultQuizResult = "You did not take the quiz! Please return to the main page to take the quiz.";
        // quizResponse will be assigned to a new value if appropriate.
        console.log("###");
        console.log(store.currentQuizChoices);

        quizResponse = defaultQuizResult;
        // TODO: There's a better way to do this... :(
        if (store.currentQuizChoices.length >= 2) {
            switch (store.currentQuizChoices[0]) {
                case (filterBubbleKnowledgeLabels.ignorant):
                    switch (store.currentQuizChoices[1]) {
                        case (filterBubbleFeelingLabels.anti):
                            quizResponse = "From this quiz, we determined that you were unaware of filter bubbles and were against their ideals.\nBut did you know that you were just inside a filter bubble?";
                            break;
                        case filterBubbleFeelingLabels.neutral:
                            quizResponse = "From this quiz, we determined that you were unaware of filter bubbles and were neutral towards them.\nWere you aware that you were just in a filter bubble?";
                            break;
                        case filterBubbleFeelingLabels.pro:
                            quizResponse = "From this quiz, we determined that you were unaware of filter bubbles and that you support their ideals.\nDid you know you were in a filter bubble?";
                            break;
                        default:
                            quizResponse = defaultQuizResult;
                            break;
                    }
                    break;
                case (filterBubbleKnowledgeLabels.knowledgable):
                    switch (store.currentQuizChoices[1]) {
                        case (filterBubbleFeelingLabels.anti):
                            quizResponse = "From this quiz, we determined that you were knowledgeable of filter bubbles but against their ideals.\nBut did you know that you were just inside a filter bubble?";
                            break;
                        case filterBubbleFeelingLabels.neutral:
                            quizResponse = "From this quiz, we determined that you were knowledgeable of filter bubbles and that you were neutral towards them.\nWere you aware that you were just in a filter bubble?";
                            break;
                        case filterBubbleFeelingLabels.pro:
                            quizResponse = "From this quiz, we determined that you were knowledgeable of filter bubbles and that you support their ideals.\n Did you know that you were just in a filter bubble?";
                            break;
                        default:
                            quizResponse = defaultQuizResult;
                            break;
                    }
                    break;
                default:
                    quizResponse = defaultQuizResult;
                    break;
            }
        } else {
            quizResponse = defaultQuizResult;
        }

        return (
            <div style={pageStyle}>
                <div style={postQuizHeader}>
                    Analysis
                </div>
                <div style={infoTextStyle}>
                    {quizResponse}
                </div>
                <div style={synapsisTextStyle}>
                    Just like a filter bubble, we tailored our content to better fit you.
                    <br /><br />
                    We accomplished this with two main strategies:
                    <br />
                    <ol>
                        <li>Find what might engage the user based on previous history</li>
                        <li>Reinforce or challenge a held belief</li>
                    </ol>
                    <br />
                    By curating content to you, we formed a pseudo-community around your beliefs. Filter bubbles often build themselves in particularly niche communities. For instance, a filter bubble may be used to separate those who code and those who dance.
                    <br /><br />
                    Filter bubbles themselves are not your enemy; they are a means of community creation.
                    <br /><br />
                </div>
                <Link to="/">
                    <MuiThemeProvider theme={filterBubbleTheme}>
                        <Button style={goHomeButtonStyle} variant="contained" color="secondary" onClick={() => { store.currentQuizChoices = []; }}>
                            Home
                        </Button>
                    </MuiThemeProvider>
                </Link>
            </div>
        );
    }
}