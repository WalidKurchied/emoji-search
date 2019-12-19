import React, { Component } from 'react';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import EmojiResults from './components/EmojiResults';
import emojis from './emojiList.json';

class App extends Component {
  state = {
    emojiList: []
  };

  componentDidMount() {
    this.filterEmojis();
  }


  filterEmojis = (keyword = null) => {
      const results = emojis.filter((emoji, index) => {
        if ((!keyword || emoji.keywords.includes(keyword)) && index <= 20) {
          return true;
        }  
      });

      this.setState({emojiList: results});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchInput filterEmojis={this.filterEmojis} />
        <EmojiResults emojiList={this.state.emojiList} />
      </div>
    );
  }
}

export default App;