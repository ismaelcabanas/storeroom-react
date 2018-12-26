import React, { Component } from 'react';
import Navigation from './components/Navigation';

class App extends Component {
  handleClick(e) {
    console.log(e)
    console.log(e.nativeEvent)
    alert('Hi there!')
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <h4>Events</h4>
          <button onClick={this.handleClick}>Hi there!</button>
        </div>        
      </div>
    );
  }
}

export default App;
