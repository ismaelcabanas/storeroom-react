import React, { Component } from 'react';
import Navigation from './components/Navigation';

class Welcome extends Component {
  render() {
    return <h1>{this.props.title}</h1>
  }
}

class Text extends Component {
  render() {
    const textDependOnBool = this.props.isActivated ? 'On' : 'Off'

    return (
          <div>
            <p>{this.props.text}</p>
            <p>{this.props.number}</p>
            <p>{textDependOnBool}</p>
          </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Welcome title='My Storeroom React App' />
          <Text text='Text string' number={2} isActivated/>
        </div>
      </div>
    );
  }
}

export default App;
