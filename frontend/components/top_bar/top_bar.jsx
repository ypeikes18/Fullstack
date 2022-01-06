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
                    < Route path='/blogs/:blogId' component={ BlogBanner }/>
                    < Route exact path={`/`} render={()=> (
                            < img src={subStackURL}
                              id='full-stack-icon'/>)}/>
                    < Route exact path={'/'} component={ SearchBar }/>
                    < Route exact path={'/'} component={ RightTopBar }/>
            </nav>
        )
    }
}

export default TopBar;