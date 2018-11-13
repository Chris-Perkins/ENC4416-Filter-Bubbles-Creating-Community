import * as React from "react";
import Button from "@material-ui/core/Button";

const buttonContainerStyle = {
    textAlign: "center" as "center",
    marginLeft: "25%",
    marginRight: "25%",
    marginTop: "4.0%",
    height: "7.5vh"
};

const individualButtonStyle = {
    width: "100%",
    height: "100%",
    padding: "0%",
    fontSize: "2.5vh"
};

export class QuizButtonContainer extends React.Component {
    render() {
        return (
            <div style={buttonContainerStyle}>
                <Button style={individualButtonStyle} variant="contained" color="primary"> 
                    Take The Quiz
                </Button>
            </div>
        );
    }
}