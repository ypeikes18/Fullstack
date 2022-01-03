import React from 'react'

import SearchBar from "../search_bar/search_bar";
import { subStackURL } from '../../util/urls'

const LeftTopBar = () => (
    <ul id='left-top-bar'>
        <img 
            src={subStackURL}
            id='full-stack-icon'/>
        <SearchBar/>
    </ul>
)

export default LeftTopBar;

