import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../storeroom/Header';

describe("Header", function() {

    let mountedHeader;

    beforeEach(() => {
        mountedHeader = shallow(<Header />);
    });

    it('renders without crashing', () => {
        let mountedHeader = shallow(<Header />);
    });

    it('renders a header', () => {
        const header = mountedHeader.find('h2');
        expect(header.length).toBe(1);
    });
});
