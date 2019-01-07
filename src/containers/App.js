import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import AddStoreroom from './AddStoreroom'

class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <div>
          <AddStoreroom />
        </div>      
      </div>
    );
  }
}

export default App;
