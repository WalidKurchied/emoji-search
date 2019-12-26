import React from 'react';
import { shallow } from 'enzyme';
import EmojiResultsRow from '../components/EmojiResultsRow';

import '../setupTests';

describe('<EmojiResultsRow />', () => {
    let wrapper = null;

    beforeAll(() => {
        const mockedEmojiTitle = 'happy';
        const mockedEmojiSymbol = '😬';
        wrapper = shallow(<EmojiResultsRow symbol={mockedEmojiSymbol} title={mockedEmojiTitle} />);
    }); 

    it('Should render all the elements needed per row', () => {
       expect(wrapper.find('.emoji-row')).toHaveLength(1);
       expect(wrapper.find('.emoji-icon')).toHaveLength(1);
       expect(wrapper.find('.emoji-title')).toHaveLength(1);
       expect(wrapper.find('.copy-info')).toHaveLength(1);
    });

    it('Should copy to clip board an icon when clicked on a row', () => {
    });
});