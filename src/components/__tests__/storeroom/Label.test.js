import React from 'react';
import {shallow} from 'enzyme';
import Label from '../../storeroom/Label';

describe("Label", function() {
    let mountedLabel;

    beforeEach(() => {
        mountedLabel = shallow(<Label />);
    });

    it('renders without crashing', () => {
        shallow(<Label />);
    });

    it('renders a label', () => {
        const labelDescription = mountedLabel.find('label');
        expect(labelDescription.length).toBe(1);
    });
});

describe("When the refered is passed to it", () => {
    let mountedLabel;
    let props;

    beforeEach(() => {
        props = {
            refered: "myText"
        };

        mountedLabel = shallow(<Label {...props} />);
    });

    it('label refers to refered element', () => {
        const forProperty = mountedLabel.find('label').prop('htmlFor');
        expect(forProperty).toEqual('myText');
    });
});
