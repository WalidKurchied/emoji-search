import React from 'react';
import { create } from 'react-test-renderer';
import Header from '../components/Header';

describe('<Header />', () => {
    let component = null; 

    beforeAll(() => {
        component = create(<Header />)
    });

    it ('Should match snapshot', () => {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});