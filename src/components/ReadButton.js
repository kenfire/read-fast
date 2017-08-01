import React from "react";
import {Button} from "material-ui";

export class ReadButton extends React.Component {
    render() {
        return (
            <di>
                <Button raised color="accent" onClick={this.props.toggle}>
                    Read Fast !
                </Button>
            </di>
        );
    }
}