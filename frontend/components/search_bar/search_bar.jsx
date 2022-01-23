import React from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { string: ''}
        this.search = this.search.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    search(string) {
        this.props.history.push(`/discover/${string}`)
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            string: e.currentTarget.value
        })
    }

    render() {
        return (
            <form onSubmit={() => this.search(this.state.string)}
                  id='search-bar-form'>
                <input type='text'
                       placeholder="Search for a writer, topic, or publication"
                       onChange={this.handleChange}
                       id='search-bar'/>
            </form>
        )
    }
}


export default withRouter(
    connect(null, null)(SearchBar)
);