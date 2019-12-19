import React, { Component } from 'react'

class SearchInput extends Component {
    handleFilterOnChange = e => {
        this.props.filterEmojis(e.target.value)
    }

    render() {
        return (
            <div id="searchInputContainer">
                <input id="searchInput" type="text" onChange={this.handleFilterOnChange} />
            </div>
        )
    }
}

export default SearchInput;
