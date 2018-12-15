import React, { Component } from 'react';
import Navigation from './components/Navigation';

class Title extends Component {
  render () {
    return <h1>{this.props.text}</h1>
  }
 }

 Title.defaultProps = {
  text: 'Titulo por defecto'
 }

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Title />
        </div>
      </div>
    );
  }
}

export default App;
