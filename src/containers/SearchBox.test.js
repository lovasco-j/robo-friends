import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

it('<SearchBox> should match the snapshot', () => {
    expect(shallow(<SearchBox onSearchChange={jest.fn} />)).toMatchSnapshot();
});

it('<SearchBox> should call the props.onSearchChange on change', () => {
    const mockOnSearchChange = jest.fn();

    const wrapper = shallow(<SearchBox onSearchChange={mockOnSearchChange} />);
    wrapper.find('input').simulate('change', {event: { target: { value: 'h'} } });

    expect(mockOnSearchChange).toBeCalled();
    expect(mockOnSearchChange.mock.calls.length).toEqual(1);
    // calls is an array of arguments arrays for every time the mock() was called.
    expect(mockOnSearchChange.mock.calls[0][0])
        .toEqual({event: { target: { value: 'h'} } });

});
