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
      objectWithInfo,
      title
    } = this.props

    this.props.title = 'Other title'
    
    const mappedNumbers = arrayOfNumbers.map(multiply)
    return (
          <div>
            {title}
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
            title={<h1>My title</h1>}
          />
        </div>
      </div>
    );
  }
}

export default App;
