import React from 'react'
import { Route, Routes, BrowseRouter } from "react-router-dom";

import LeftTopBar from './left_top_bar'
import RightTopBar from './right_top_bar'
import SignOut from './sign_out'
import BlogLogo from './blog_logo'
import { connect } from 'react-redux';



class TopBar extends React.Component {
    render() {
        return (
            <nav id='top-bar'> 
                <Routes>
                    < Route path={`/`} element={<>
                    < LeftTopBar />
                    < RightTopBar />
                    </>}/>
                    <Route path={`/blogs/:id`} element ={< BlogLogo />}/>
                </Routes>                  
            </nav>
        )
    }

}

export default TopBar;