import React, { Component } from 'react';
import Navigation from './components/Navigation';
import cars from './data/cars.json';

class CarItem extends Component {
  render() {
    const {car} = this.props

    return (
      <li key={car.id}>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
    )
  }
}

class App extends Component {
  render() {
    
    return (
      <div>
        <Navigation />
        <h4>Trabajando con lista de objetos</h4>
        <ul>
          {
            cars.map(car => {
              return <CarItem car={car} />
            })
          }          
        </ul>
      </div>
    );
  }
}

export default App;
