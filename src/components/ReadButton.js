import React from "react";
import {Button} from "material-ui";

export class ReadButton extends React.Component {
    render() {
        return (
            <div>
                <Button raised color="accent" onClick={this.props.toggle}>
                    Read Fast !
                </Button>
            </div>
        );
    }
}