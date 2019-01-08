import React from 'react';
import {shallow} from 'enzyme';
import TextFormElement from '../../common/TextFormElement';

describe("TextFormElement", () => {
    let mountedTextFormElement;

    beforeEach(() => {
        mountedTextFormElement = shallow(<TextFormElement />);
    });

    it('renders without crashing', () => {
        shallow(<TextFormElement />);
    });

    it('renders a label', () => {
        const label = mountedTextFormElement.find('Label');
        expect(label.length).toBe(1);
    });

    it('renders a text', () => {
        const text = mountedTextFormElement.find('Text');
        expect(text.length).toBe(1);
    });
});

describe("When the name of text form element is passed to it", () => {
    let mountedTextFormElement;
    let props;

    beforeEach(() => {
        props = {
            name: "myName"
        };

        mountedTextFormElement = shallow(<TextFormElement {...props} />);
    });

    it('the name prop is passed to Label component', () => {
        const labelComponent = mountedTextFormElement.find('Label');
        expect(labelComponent.prop('refered')).toEqual('myName');
    });

    it('the name prop is passed to Text component', () => {
        const textComponent = mountedTextFormElement.find('Text');
        expect(textComponent.prop('name')).toEqual('myName');
    });
});
