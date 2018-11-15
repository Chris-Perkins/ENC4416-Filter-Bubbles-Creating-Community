import * as React from "react";
import Button from "@material-ui/core/Button";
import { filterBubbleTheme } from "../theme";
import { MuiThemeProvider } from "@material-ui/core";

const buttonContainerStyle = {
    textAlign: "center" as "center",
    marginLeft: "2.5%",
    marginRight: "2.5%",
    marginTop: "4.0%",
    height: "7.5vh"
};

const individualButtonStyle = {
    width: "50%",
    height: "100%",
    padding: "0%",
    fontSize: "2.5vh"
};

export class QuizButtonContainer extends React.Component {
    render() {
        return (
            <div style={buttonContainerStyle}>
                <MuiThemeProvider theme={filterBubbleTheme}>
                    <Button style={individualButtonStyle} variant="contained" color="secondary"> 
                        Take The Quiz
                    </Button>
                </MuiThemeProvider>
            </div>
        );
    }
}