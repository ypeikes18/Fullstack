import React from 'react'
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';


import RightTopBar from './right_top_bar'
import SignOut from './sign_out'
import BlogLogo from './blog_logo'
import SearchBar from "../search_bar/search_bar";
import { subStackURL } from '../../util/urls'

class TopBar extends React.Component {
    render() {
        return (
            <nav id='top-bar'> 
                    < Route path={`/`} render={()=> (
                            < img src={subStackURL}
                              id='full-stack-icon'/>)}/>
                    < Route path={'/'} component={ SearchBar }/>
                    < Route path={'/'} component={ RightTopBar }/>
                    < Route path={`/blogs/:id`} component={ BlogLogo }/>                  
            </nav>
        )
    }
}

export default TopBar;