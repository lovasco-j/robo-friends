import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('<CardList> should match the snapshot', () => {
    const mockRobots = [
        {
            id: 0,
            name: 'Test',
            email: 'j@l',
            company: 'rb@friends'
        }
    ];
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});

