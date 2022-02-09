import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import RightTopBar from './right_top_bar'
import SearchBarContainer from "../search_bar/search_bar";

class HomeTopBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { hideSearch, match, history } = this.props;
        const searchBar = hideSearch ? null : (<SearchBarContainer/>);
        return (
            <nav id='top-bar'>
                    
                        <img src={window.faviconURL}
                        id='full-stack-icon'
                        onClick={match.path === '/' ? null : () => history.push('/')}/>
                    
                    
                               
                { searchBar } 
                <RightTopBar/> 
            </nav>
        )
    }
}

export default withRouter(HomeTopBar);