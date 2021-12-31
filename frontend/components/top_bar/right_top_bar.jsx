import React from 'react';
import DropDown from './dropdown';

class RightTopBar extends React.Component {

    
    
    render() {
        return (
            <ul id='right-top-bar'>
                <DropDown/>
                <DropDown/>
                <DropDown/>
            </ul>
        )
    }

}

export default RightTopBar;