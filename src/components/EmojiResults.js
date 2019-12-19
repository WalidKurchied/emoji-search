import React from 'react'
import EmojiResultsRow from './EmojiResultsRow';

export default function EmojiResults({ emojiList }) {
    return (
        <div id="emojiResults">
            {emojiList.map(({title, symbol}) => (
                <EmojiResultsRow key={title} title={title} symbol={symbol} />
            ))}
        </div>
    )
}
