import React from "react";
import {ReadButton} from "../components/ReadButton";
import {Display} from "../components/Display";
import {Button, TextField} from "material-ui";

export class ReadFastContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reading: true,
            buffer: '',
            text: '',
            currentWordIndex: 0,
            speed: 60,
            refresh: 500
        };
        // "this" binding
        this.toggleRead = this.toggleRead.bind(this);
        this.addText = this.addText.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeRefresh = this.handleChangeRefresh.bind(this);
        this.nextWord = this.nextWord.bind(this);
        this.updateRefresh = this.updateRefresh.bind(this);
    }

    // Update state on reading toggle
    toggleRead() {
        this.setState({
            reading: !this.state.reading,
            text: this.state.reading ? this.state.buffer : '',
            currentWordIndex: 0,
            refresh: this.state.refresh
        });
    }

    setBuffer(text) {
        this.setState({buffer: text});
    }

    addText() {
        let text = this.state.buffer;
        this.setState({buffer: text});
    }

    handleChange(e) {
        this.setBuffer(e.target.value);
    }

    handleChangeRefresh(e) {
        this.setState({
            speed: e.target.value,
            refresh: 60 * 1000 / (e.target.value)
        });

    }

    /**
     * Update the word list index
     */
    nextWord() {
        if (this.state.currentWordIndex < this.state.text.split(' ').length - 1) {
            this.setState({currentWordIndex: ++this.state.currentWordIndex});
        } else if (!this.state.reading) {
            this.toggleRead()
        }
    }

    updateRefresh() {
        this.setState({refresh: this.state.refresh});
    }

    render() {
        let button;
        if (this.state.reading) {
            button = (
                <ReadButton toggle={this.toggleRead} addText={this.addText}/>
            );
        } else {
            button = (
                <Button raised color="accent" onClick={this.toggleRead}>
                    Reading Fast !!!
                </Button>
            );
        }

        return (
            <div>
                <TextField
                    id="multiline-flexible"
                    label="Text to read"
                    multiline
                    rowsMax="4"
                    margin="normal"
                    fullWidth
                    onChange={this.handleChange}
                    value={this.state.buffer}/>

                <input onChange={this.handleChangeRefresh} type="range" step="1" min="60" max="1000"
                       value={this.state.speed}/>
                <h2>{this.state.speed} words / minute</h2>

                {button}

                <Display text={this.state.text} currentWordIndex={this.state.currentWordIndex}
                         nextWord={this.nextWord} updateRefresh={this.updateRefresh} refresh={this.state.refresh}/>
            </div>
        );
    }
}