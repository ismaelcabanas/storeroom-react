import React, { Component } from 'react';
import Navigation from './components/Navigation';

class App extends Component {

  constructor() {
    super()
    this.state = {mouseX: 0, mouseY: 0}
  }

  handleMouseMove(e) {
    const {clientX, clientY} = e
    this.setState({mouseX: clientX, mouseY: clientY})
  }

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
        <div
          onMouseMove={this.handleMouseMove}
          style={{border: '1px solid #000', marginTop: 10, padding: 10}}>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>        
      </div>
    );
  }
}

export default App;
