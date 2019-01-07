import React from 'react';
import {shallow} from 'enzyme';
import AddStoreroomForm from '../../storeroom/AddStoreroomForm';

describe("AddStoreroomForm", function() {
    let mountedForm;

    beforeEach(() => {
        mountedForm = shallow(<AddStoreroomForm />);
    });

    it('renders without crashing', () => {
        shallow(<AddStoreroomForm />);
    });

    it('renders a form', () => {
        const form = mountedForm.find('form');
        expect(form.length).toBe(1);
    });

    it('renders a storeroom name', () => {
        const textFormElement = mountedForm.find('TextFormElement');
        expect(textFormElement.length).toBe(1);
    });

    it('renders a submit button', () => {
        const submitButtom = mountedForm.find('Button');
        expect(submitButtom.length).toBe(1);
    });
});
