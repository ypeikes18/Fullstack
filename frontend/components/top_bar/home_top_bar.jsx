import React from 'react'

import RightTopBar from './right_top_bar'
import SearchBarContainer from "../search_bar/search_bar";
import { subStackURL } from '../../util/urls'

class HomeTopBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const searchBar = this.props.hideSearch ? null : (<SearchBarContainer/>);
        return (
            <nav id='top-bar'> 
                <img src={subStackURL}
                 id='full-stack-icon'/>
                { searchBar } 
                <RightTopBar/> 
            </nav>
        )
    }
}

export default HomeTopBar;