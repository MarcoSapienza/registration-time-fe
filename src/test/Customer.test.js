import React, { Component }  from 'react';
import { shallow } from 'enzyme';
import CustomerTableRow from "../components/atomic-component/customertablerow.atomic";


describe('CustomerTableRow', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<CustomerTableRow />);
        expect(wrapper).toMatchSnapshot();
        // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});
