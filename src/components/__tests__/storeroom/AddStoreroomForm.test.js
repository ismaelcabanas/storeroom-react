import React from 'react';
import {shallow} from 'enzyme';
import AddStoreroomForm from '../../storeroom/AddStoreroomForm';

describe("AddStoreroomForm", function() {
    let mountedForm
    it('renders without crashing', () => {
        shallow(<AddStoreroomForm />);
    });

    it('renders a form', () => {
        mountedForm = shallow(<AddStoreroomForm />);
        const form = mountedForm.find('form');
        expect(form.length).toBe(1);
    });
});
