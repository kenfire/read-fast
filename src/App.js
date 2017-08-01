import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import {ReadFastContainer} from "./containers/ReadFastContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Read-Fast !!!</h2>
                </div>
                <ReadFastContainer/>
            </div>
        );
    }
}

export default App;
