import React from 'react';
import {shallow} from 'enzyme';
import Label from '../../storeroom/Label';

it('renders without crashing', () => {
    let mountedLabel = shallow(<Label />);
});