import React, { Component } from 'react';
import Navigation from './components/Navigation';

class Contador extends Component {
  constructor () {
    super()
    this.state = {contador: 1}
  }
  render () {
    return <span>{this.state.contador}</span>
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
