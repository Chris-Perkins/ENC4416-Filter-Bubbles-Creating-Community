import * as React from "react";

const titleContainerStyle = {
    textAlign: "center" as "center",
    marginLeft: "2.5%",
    marginRight: "2.5%",
    marginTop: "7.0%",
};

const titleTextStyle = {
    fontSize: "12vh",
    fontWeight: "bold" as "bold",
    color:"#FFFFFF"
};

const subtitleTextStyle = {
    fontSize: "6vh",
    color:"#FFFFFF"
};

const infoTextStyle = {
    fontSize: "4vh",
    textAlign: "left" as "left",
    marginLeft: "5.0%",
    marginRight: "5.0%",
    marginTop: "2.0%",
    color:"#FFFFFF"
};

export class InfoBlock extends React.Component {
    render() {
        return (
            <div>
                <div style={titleContainerStyle}>
                    <span style={titleTextStyle}>
                        Filter Bubbles
                    </span>
                    <br />
                    <span style={subtitleTextStyle}>
                        Friend or Foe?
                    </span>
                </div>
                <p style={infoTextStyle}>
                    Filter bubbles are used by today's largest tech companies including Facebook, Google, and Twitter. 
                    However, many are divided on their potential use.
                </p>
            </div>
        );
    }
}