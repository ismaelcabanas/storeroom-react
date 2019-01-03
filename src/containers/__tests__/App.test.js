import React from 'react';
import {shallow} from 'enzyme';
import App from '../../containers/App';

describe("App", function() {

  it('renders without crashing', () => {
    let mountedApp = shallow(<App />);  
  });

  it('renders menu navigation', () => {
    let mountedApp = shallow(<App />);
    const navigation = mountedApp.find('Navigation');
    expect(navigation.length).toBe(1);
  });

  it('renders add storeroom form', () => {
    let mountedApp = shallow(<App />);
    const storeroom = mountedApp.find('AddStoreroom');
    expect(storeroom.length).toBe(1);
  });
});

