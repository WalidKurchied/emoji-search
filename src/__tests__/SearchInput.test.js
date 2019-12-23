import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import SearchInput from '../components/SearchInput';

import '../setupTests';

it('Should match snapshot', () => {
    const component = create(<SearchInput />);
    expect(component.toJSON()).toMatchSnapshot();
});

it('Should render input element', () => {
    const component = shallow(<SearchInput />);
    expect(component.find('input')).toHaveLength(1);
});

it('Should perform on input change event successfully', () => {
    const mockedFilterEmojis = jest.fn();
    
    const component = shallow(<SearchInput filterEmojis={mockedFilterEmojis} />);

    component.find('input').simulate('change', {target: 'earth'});

    expect(mockedFilterEmojis.mock.calls.length).toBe(1);
});