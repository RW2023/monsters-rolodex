import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Ryan',
      lastName: 'Wilson',
      age: 46,
      vocation: 'Software Engineer',
      occupation: 'Truck Driver',
      buttonLabel: 'Goal',
    };
  }

  handleClick = () => {
    if (this.state.buttonLabel === 'Goal') {
      this.setState({
        occupation: this.state.vocation,
        buttonLabel: 'Go Back',
      });
    } else {
      this.setState({
        occupation: 'Truck Driver',
        buttonLabel: 'Goal',
      });
    }
  };

  render() {
    const { firstName, lastName, age, occupation, buttonLabel } = this.state;
    const Name = `${firstName} ${lastName}`;
    return (
      <div className="App">
        {buttonLabel === 'Goal' && <h1>Hi my name is {Name}</h1>}
        <h2>I am {age} years old</h2>
        <h3>I am a {occupation}</h3>
        {buttonLabel === 'Goal' && <h4>at the moment</h4>}
        <button onClick={this.handleClick}>{buttonLabel}</button>
      </div>
    );
  }
}

export default App;
