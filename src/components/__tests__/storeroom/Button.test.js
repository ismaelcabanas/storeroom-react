import React from 'react';
import {shallow} from 'enzyme';
import Button from '../../storeroom/Button';

it('renders without crashing', () => {
    let mountedButton = shallow(<Button />);
});