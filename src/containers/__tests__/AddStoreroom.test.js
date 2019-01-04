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

  it('renders one label', () => {
    const label = mountedAddStoreroom.find("Label");
    expect(label.length).toBe(1);
  });

  it('renders one text', () => {
    const descriptionText = mountedAddStoreroom.find("Text");
    expect(descriptionText.length).toBe(1);
  });

  it('renders one button', () => {
    const saveButton = mountedAddStoreroom.find("Button");
    expect(saveButton.length).toBe(1);
  });
});
  