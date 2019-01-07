import React from 'react';
import {shallow} from 'enzyme';
import App from '../../containers/App';

describe("App", function() {

  let mountedApp;

  beforeEach(() => {
    mountedApp = shallow(<App />);    
  });

  it('renders without crashing', () => {
    shallow(<App />);  
  });

  it('renders menu navigation', () => {    
    const navigation = mountedApp.find('Navigation');
    expect(navigation.length).toBe(1);
  });

  it('renders add storeroom form', () => {    
    const storeroom = mountedApp.find('AddStoreroom');
    expect(storeroom.length).toBe(1);
  });
  
});

