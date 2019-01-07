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