import React, { Component } from 'react';
import Navigation from './components/Navigation';
import AddStoreroom from './components/storeroom/AddStoreroom'

class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <AddStoreroom />
        </div>      
      </div>
    );
  }
}

export default App;
