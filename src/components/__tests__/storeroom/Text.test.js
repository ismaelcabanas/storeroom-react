import React from 'react';
import {shallow} from 'enzyme';
import Text from '../../storeroom/Text';

it('renders without crashing', () => {
    shallow(<Text />);
});