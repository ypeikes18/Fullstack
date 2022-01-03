import React from 'react'
import { Route, Routes, BrowseRouter } from "react-router-dom";
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
                <Routes>
                    < Route path={`/`} element={<>
                        < img src={subStackURL}
                              id='full-stack-icon'/>
                        < SearchBar />
                        < RightTopBar />
                    </>}/>
                    <Route path={`/blogs/:id`} element ={< BlogLogo />}/>
                </Routes>                  
            </nav>
        )
    }
}

export default TopBar;