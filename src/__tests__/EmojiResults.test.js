import React from 'react';
import { shallow } from 'enzyme';
import EmojiResults from '../components/EmojiResults';
import EmojiResultsRow from '../components/EmojiResultsRow';

import '../setupTests';

describe('<EmojiResults />', () => {
    let wrapper;

    beforeAll(() => {
        const mockedEmojiList = [{title: 'fake name', symbol: ':)'}];
        wrapper = shallow(<EmojiResults emojiList={mockedEmojiList} />);
    });

    it('Should render itself', () => {
        expect(wrapper.find('#emojiResults')).toHaveLength(1);
    });

    it('Should render an <EmojiResultsRow /> component', () => {
        expect(wrapper.find(EmojiResultsRow)).toHaveLength(1);        
    });

    it('Should not render any <EmojiResultsRow /> if an empty emojiList prop is passed', () => {
        wrapper = shallow(<EmojiResults emojiList={[]} />)
        expect(wrapper.find(EmojiResultsRow)).toHaveLength(0);
    });
});