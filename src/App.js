import React, { Component } from 'react';
import Navigation from './components/Navigation';

class Contador extends Component {
  render () {
    const contador = 0
    return <span>{contador}</span>
  }
 }

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <p>Mi primer componente con State</p>
          <Contador />
        </div>
      </div>
    );
  }
}

export default App;
