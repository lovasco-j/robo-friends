import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

it('<SearchBox> should match the snapshot', () => {
    expect(shallow(<SearchBox onSearchChange={jest.fn} />)).toMatchSnapshot();
});

it('<SearchBox> should call the props.onSearchChange on change', () => {
    const mockOnSearchChange = jest.fn();

    const wrapper = shallow(<SearchBox onSearchChange={mockOnSearchChange} />);
    wrapper.find('input').simulate('change');

    expect(mockOnSearchChange).toBeCalled();
});
