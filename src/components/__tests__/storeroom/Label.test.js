import React from 'react';
import {shallow} from 'enzyme';
import Label from '../../storeroom/Label';

describe("Label", function() {
    let mountedLabel;

    beforeEach(() => {
        mountedLabel = shallow(<Label />);
    });

    it('renders without crashing', () => {
        let mountedLabel = shallow(<Label />);
    });

    it('renders a label', () => {
        const labelDescription = mountedLabel.find('label');
        expect(labelDescription.length).toBe(1);
    });
});
