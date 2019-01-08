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

describe("When the name is passed to it", () => {
    let mountedText;
    let props;

    beforeEach(() => {
        props = {
            name: "myName"
        };

        mountedText = shallow(<Text {...props} />);
    });

    it('input has the name', () => {
        const nameProperty = mountedText.find('input').prop('name');
        expect(nameProperty).toEqual('myName');
    });
});

