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
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n*2)
    return (
          <div>
            <p>{mappedNumbers.join(', ')}</p>
            <p>{this.props.objectWithInfo.key}</p>
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
            objectWithInfo={{key:'First Value', key2:'Other value'}}
            isActivated
            number={2} 
            text='Text string'             
          />
        </div>
      </div>
    );
  }
}

export default App;
