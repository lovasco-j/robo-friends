import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

it('<Main> should have a mocked snapshot when pending is false', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn(),
        searchField: '',
        robots: [],
        isPending: false,
    };

    const wrapper = shallow(<Main {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
});

it('<Main> should have a mocked snapshot when pending is true', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn(),
        searchField: '',
        robots: [],
        isPending: true,
    };

    const wrapper = shallow(<Main {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
});


it('should return all robots when no search value is entered', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn(),
        searchField: '',
        robots: [
            {id: 0, name: 'dog'},
            {id: 1, name: 'cat'},
            {id: 2, name: 'doug'},
        ],
        isPending: false,
    };

    const wrapperToTestFilter = shallow(<Main {...mockProps} />)

    expect(wrapperToTestFilter.instance().filterRobots())
        .toEqual(mockProps.robots);
});

it('should filter when search val has been entered', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        onSearchChange: jest.fn(),
        searchField: 'do',
        robots: [
            {id: 0, name: 'dog'},
            {id: 1, name: 'cat'},
            {id: 2, name: 'doug'},
        ],
        isPending: false,
    };

    const expectedRobots = [
        {id: 0, name: 'dog'},
        {id: 2, name: 'doug'},
    ];

    const wrapperToTestFilter = shallow(<Main {...mockProps} />)

    expect(wrapperToTestFilter.instance().filterRobots())
        .toEqual(expectedRobots);
});
