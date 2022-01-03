import React from "react";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search(e) {
        //should eventually redirect to a results page with
        // matches or posible matches
    }

    render() {
        return (
            <form onMouseEnter={this.search}
                  id='search-bar-form'>
                <input type='text'
                       placeholder="Search for a writer, topic, or publication"
                       id='search-bar'/>
            </form>
        )
    }
}

export default SearchBar;