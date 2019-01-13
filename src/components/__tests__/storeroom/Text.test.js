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

describe("When the props ara passed to it", () => {
    let mountedText;
    let props;

    beforeEach(() => {
        props = {
            name: "myName",
            placeholder: "Introduce your name",
            value: "MyValue"
        };

        mountedText = shallow(<Text {...props} />);
    });

    it('text has the name', () => {
        const nameProperty = mountedText.find('input').prop('name');
        expect(nameProperty).toEqual('myName');
    });

    it('text has the placeholder', () => {
        const placeHolderProperty = mountedText.find('input').prop('placeholder');
        expect(placeHolderProperty).toEqual('Introduce your name');
    });

    it('text has the value', () => {
        const valueProperty = mountedText.find('input').prop('value');
        expect(valueProperty).toEqual('MyValue');
    });
});

describe("When value prop is not passed", function() {
    it('text has empty value', () => {
        const EMPTY = '';
        const mountedText = shallow(<Text />);
        const valueProperty = mountedText.find('input').prop('value');
        
        expect(valueProperty).toEqual(EMPTY);
    });
});