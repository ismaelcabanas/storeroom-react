import React, { Component } from 'react';
import Navigation from './components/Navigation';

function Welcome(props) {
  return <h1>{props.title}</h1>
}

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Welcome title='My Storeroom React App' />
        </div>
      </div>
    );
  }
}

export default App;
