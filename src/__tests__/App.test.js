import React from 'react';
import App from '../App';
import { create } from 'react-test-renderer';

describe('<App />', () => {
  let component = null;

  beforeEach(() => {
    component = create(<App />);
  });

  it('Should match snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should display a list of emojis', () => {
    const instance = component.getInstance();
    expect(instance.state.emojiList.length).toBe(20);
  });

  it('Should change emojilist state value based on the filterEmojis search query', () => {
    const instance = component.getInstance();
    expect(instance.state.emojiList.length).toBe(20);

    instance.filterEmojis('earth');

    expect(instance.state.emojiList.length).toBe(3);
    expect(instance.state.emojiList[0].title).toBe('Earth Americas');
  });
});
