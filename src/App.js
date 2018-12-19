import React, { Component } from 'react';
import Navigation from './components/Navigation';
import ConditionalSection from './sections/Conditional';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <ConditionalSection />
        </div>
      </div>
    );
  }
}

export default App;
