import React, { Component } from 'react';
import Navigation from './components/Navigation';

class App extends Component {
  render() {

    return (
      <div>
        <Navigation />
        <div className="container">
          <h4>Events</h4>
          <button onClick={() => alert('Hi there!')}>Hi there!</button>
        </div>        
      </div>
    );
  }
}

export default App;
