import React from 'react'
import { Route, Routes, BrowseRouter } from "react-router-dom";

import LeftTopBar from './left_top_bar'
import BlogLogo from './blog_logo'



class TopBar extends React.Component {
    render() {
        return (
            <nav id='top-bar'> 
                <Routes>
                    <Route path={`/`} element={< LeftTopBar />}/>
                    <Route path={`/blogs/:id`} element ={< BlogLogo />}/>
                </Routes>                  

        

            </nav>
        )
    }

}

export default TopBar