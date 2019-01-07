import React from 'react';
import {shallow} from 'enzyme';
import AddStoreroom from '../AddStoreroom'

describe("AddStoreroom", function() {

  let mountedAddStoreroom = shallow(<AddStoreroom />);

  it('renders without crashing', () => {
    shallow(<AddStoreroom />);
  });
  
  it('renders add storeroom header', () => {
    const header = mountedAddStoreroom.find("Header");
    expect(header.length).toBe(1);
  });

  it('renders add storeroom form', () => {
    const addStoreroomForm = mountedAddStoreroom.find("AddStoreroomForm");
    expect(addStoreroomForm.length).toBe(1);
  });
});
  