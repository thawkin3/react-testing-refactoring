import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
  }

  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <main className="App">
        <h1>Counter Example</h1>
        <p>We'll use a simple counter component to see how easy it is to test our code using React Testing Library and Enzyme.</p>
        <p>We'll also look at how easy or difficult refactoring is with each test library.</p>
        <br />
        <p id="output">You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>
          Click me
        </button>
      </main>
    );
  }
}

export default App;
