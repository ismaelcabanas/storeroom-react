import React from 'react';
import {shallow} from 'enzyme';
import Button from '../../storeroom/Button';

describe("Button", function() {

    it('renders without crashing', () => {
        let mountedButton = shallow(<Button />);
    });

    it('renders a button', () => {
        let mountedButton = shallow(<Button />);
        const button = mountedButton.find('button');
        expect(button.length).toBe(1);
    });
});
