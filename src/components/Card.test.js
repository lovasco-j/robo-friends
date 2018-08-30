import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('<Card> should match the snapshot', () => {
    const mockProps = { id: 0, name: 'Test', email: 'j@l', company: 'rb@friends' }
    expect(shallow(<Card {...mockProps} />)).toMatchSnapshot();
});

