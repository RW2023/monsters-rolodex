import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: "abcde",
          name: 'Linda'
        },
        {
          id: "fghij",
          name: 'frank'
        },
        {
          id: "klmno",
          name: 'jacky'
        },
        {
          id: "pqrst",
          name: 'Andrei'
        },
      ]
    };
  }
  render() {
    return (
      <div className='App'>
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
