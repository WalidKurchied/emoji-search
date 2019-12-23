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

  filterEmojis = (searchKeyword = null) => {
    let maxEmojis = 1;

    const results = emojis.filter(emoji => {        
      if ((!searchKeyword || emoji.keywords.includes(searchKeyword)) && maxEmojis <= 20) {
        maxEmojis++;
        return true;
      }  

      return false;
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