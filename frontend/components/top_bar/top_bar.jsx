import React from 'react'
import { Switch, Route } from "react-router-dom";


import RightTopBar from './right_top_bar'
import BlogBanner from './blog_banner'
import SearchBar from "../search_bar/search_bar";
import { subStackURL } from '../../util/urls'

class TopBar extends React.Component {
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

export default TopBar;