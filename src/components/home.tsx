import * as React from "react";
import { InfoBlock } from "./InfoBlock";
import { QuizButtonContainer } from "./QuizButtonContainer";

const pageStyle = {
    marginTop:"2.5%",
    marginLeft:"2.5%",
    width: "95%",
    minHeight:"95%",
    position:"absolute" as "absolute"
};


export class Home extends React.Component {
    render() {
        return (
            <div style={pageStyle}>
                <InfoBlock />
                <QuizButtonContainer />
            </div>
        );
    }
}