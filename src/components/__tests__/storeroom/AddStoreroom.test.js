import React from 'react';
import ReactDOM from 'react-dom';
import AddStoreroom from '../../storeroom/AddStoreroom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddStoreroom />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  