import React from 'react'

import SearchBar from "../search_bar/search_bar";
import FullStackIcon from "./fullstack_icon";

const LeftTopBar = () => (
    <ul id='left-top-bar'>
        <FullStackIcon/>
        <SearchBar/>
    </ul>
)

export default LeftTopBar;