import React, { Component } from 'react';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <h1>My Storeroom React App</h1>
        </div>
      </div>
    );
  }
}

export default App;
