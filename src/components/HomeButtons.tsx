import * as React from "react";

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
    padding: "0%"
};

export class HomeButtons extends React.Component {
    render() {
        return (
            <div style={buttonContainerStyle}>
                <button style={individualButtonStyle}> 
                    test1
                </button>
                <button style={individualButtonStyle}> 
                    test
                </button>
            </div>
        );
    }
}