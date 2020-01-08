import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount,
    }));

  increment = this.makeIncrementer(1);

  makeDecrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count - amount,
    }));

  decrement = this.makeDecrementer(1);

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>Increment</button>
        <button className="decrement" onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default App;
