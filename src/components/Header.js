import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header id="header">
                <img
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
                    width="32"
                    height="32"
                    alt="header emoji one"
                    className="header-emoji"
                />
                
                <h1 id="emojiAppTitle">Emoji Search</h1>

                <img
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
                    width="32"
                    height="32"
                    alt="header emoji two"
                    className="header-emoji"
                />
            </header>
        );
    }
}