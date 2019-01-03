import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../storeroom/Header';

it('renders without crashing', () => {
    let mountedHeader = shallow(<Header />);
});