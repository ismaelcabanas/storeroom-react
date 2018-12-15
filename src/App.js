import React, { Component } from 'react';
import Navigation from './components/Navigation';

class Welcome extends Component {
  render() {
    return <h1>{this.props.title}</h1>
  }
}

class Text extends Component {
  render() {
    const {
      arrayOfNumbers,      
      multiply,
      objectWithInfo
    } = this.props

    const mappedNumbers = arrayOfNumbers.map(multiply)
    return (
          <div>
            <p>{mappedNumbers.join(', ')}</p>
            <p>{objectWithInfo.key}</p>
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
          <Text 
            arrayOfNumbers={[2,5,6]} 
            multiply={(number) => number * 4}
            number={2} 
            objectWithInfo={{key:'First Value', key2:'Other value'}}
            text='Text string'             
          />
        </div>
      </div>
    );
  }
}

export default App;
