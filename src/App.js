import React, { Component } from 'react';
import Navigation from './components/Navigation';

class Contador extends Component {
  constructor (props) {
    super(props)
    this.state = {contador: this.props.contadorInicial}
    setInterval(() => {
      this.setState({contador: this.state.contador + 1})
    }, 1000)
  }
  state = {contador: 0}

  render () {
    return <ContadorNumero numero={this.state.contador} />
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}

class ContadorNumero extends Component {
  render () {
    console.log('ContadorNumero render()')
    return <span>{this.props.numero}</span>
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <p>Mi primer componente con State</p>
          <Contador />
        </div>
      </div>
    );
  }
}

export default App;
