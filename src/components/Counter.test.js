import React from 'react';
import {shallow} from 'enzyme';
import Counter from './Counter';

describe('<Counter>', () => {
    it('<Counter> should have a rendered snapshot', () => {
        expect(shallow(<Counter/>)).toMatchSnapshot();
    })

    it('<Counter> should count', () => {
        const counterWrapper = shallow(<Counter/>);
        const buttonToClick = counterWrapper.find('button');
        buttonToClick.simulate('click');
        buttonToClick.simulate('click');
        expect(counterWrapper.state().count).toEqual(2);
    });
});

