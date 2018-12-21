import React, { Component } from 'react';
import Navigation from './components/Navigation';
import cars from './data/cars.json';

class App extends Component {
  render() {
    const numbers = [1, 1, 3, 4, 5]

    return (
      <div>
        <Navigation />
        <h4>Trabajando con lista de objetos</h4>
        <ul>
          {
            cars.map(car => {
              return (
                <li key={car.id}>
                  <p><strong>Nombre: </strong>{car.name}</p>
                  <p><strong>Marca: </strong>{car.company}</p>
                </li>
              )
            })
          }          
        </ul>
      </div>
    );
  }
}

export default App;
