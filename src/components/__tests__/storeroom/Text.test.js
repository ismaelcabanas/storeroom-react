import React from 'react';
import {shallow} from 'enzyme';
import Text from '../../storeroom/Text';

describe("Text", () => {
    let mountedText;

    beforeEach(() => {
        mountedText = shallow(<Text />);
    });

    it('renders without crashing', () => {
        shallow(<Text />);
    });

    it('renders a input text', () => {
        const inputText = mountedText.find("input[type='text']");
        expect(inputText.length).toBe(1);
    });
});

