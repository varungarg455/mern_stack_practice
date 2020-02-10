import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: false
    };
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently :{" "}
          {this.state.counter < 0 ? "0" : this.state.counter}
        </h1>
        <h3
          data-test="counter-error"
          className={
            this.state.error ? "counter-error" : "counter-error hidden"
          }
        >
          Counter value can't be less than 0
        </h3>
        <button
          data-test="increment-button"
          onClick={() =>
            this.setState({ counter: this.state.counter + 1, error: false })
          }
        >
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() =>
            this.state.counter > 0
              ? this.setState({ counter: this.state.counter - 1 })
              : this.setState({ error: true })
          }
        >
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
