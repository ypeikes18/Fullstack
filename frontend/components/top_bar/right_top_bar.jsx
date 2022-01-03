import React from 'react';
import DropDown from './dropdown';
import { userIconUrl } from '../../util/urls'
import Button from './button';
import { Link } from 'react-router-dom';
import { dropdown1 } from '../../util/dropdowns'


class RightTopBar extends React.Component {

    
    
    render() {
        return (
            <ul id='right-top-bar'>
                < DropDown />
                < DropDown />
                < DropDown />
                <Link to='/sign-up' 
                      className='orange-button '
                      id='start-writing'>
                Start Writing
                </Link>
                <Link to='/sign-in' className='sign-in'>Sign in</Link>
                <DropDown 
                id='user-icon'
                img={userIconUrl}
                options={dropdown1}/>
                
            </ul>
        )
    }

}

export default RightTopBar;