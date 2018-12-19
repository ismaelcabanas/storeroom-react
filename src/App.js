import React, { Component } from 'react';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    const numbers = [1, 1, 3, 4, 5]

    return (
      <div>
        <Navigation />
        {numbers.map(number => {
          return <p>I am the number {number}</p>
        })}
      </div>
    );
  }
}

export default App;
