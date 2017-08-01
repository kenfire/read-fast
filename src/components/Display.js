import React from "react";

/**
 * Display the word list one after the other
 */
export class Display extends React.Component {
    /**
     * Display one word every "refresh" seconds
     */
    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.nextWord();
            this.props.updateRefresh();
        }, this.props.refresh);
    }

    /**
     * Update the interval
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        // Clear the previous interval
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.props.nextWord();
            this.props.updateRefresh();
        }, nextProps.refresh);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let wordList = this.props.text.split(' ');
        return (
            <div>
                <h1>{wordList[this.props.currentWordIndex]}</h1>
            </div>
        );
    }
}