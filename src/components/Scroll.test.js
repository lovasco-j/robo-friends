import { shallow } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

it( '<Scroll> should mock a snapshot', () => {
    expect(shallow(<Scroll/>)).toMatchSnapshot();
});
