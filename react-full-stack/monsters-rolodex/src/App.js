import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  // Arrow functions automatically bind the state of the
  // funciton to the state in which it is defined.
  handleChange = e => this.setState({ searchField: e.target.value });

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          value={this.state.searchField}
          handleChange={this.handleChange}
          placeholder="search monsters"
        />
        <CardList
          monsters={this.state.monsters.filter(monster =>
            monster.name
              .toLowerCase()
              .includes(this.state.searchField.toLowerCase())
          )}
        />
      </div>
    );
  }
}

export default App;
