import React from 'react'
import copy from 'copy-to-clipboard';

export default function EmojiResultsRow({ symbol, title }) {
    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    return (
        <div className="emoji-row" onClick={() => copy(symbol)}>
            <img className="emoji-icon" src={src} alt={title} />
            <span className="emoji-title">{title}</span>
            <span className="copy-info">Click to copy emoji</span>
        </div>
    )
}

