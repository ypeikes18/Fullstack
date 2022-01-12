import React from 'react'

import RightTopBar from './right_top_bar'
import SearchBar from "../search_bar/search_bar";
import { subStackURL } from '../../util/urls'

class HomeTopBar extends React.Component {
    render() {
        return (
            <nav id='top-bar'> 
                    
                            < img src={subStackURL}
                              id='full-stack-icon'/>
                            <SearchBar/> 
                            <RightTopBar/> 
            </nav>
        )
    }
}

export default HomeTopBar;