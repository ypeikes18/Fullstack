import React from 'react';
import { connect } from 'react-redux';

import DropDown from './dropdown';
import IconMenuContainer from './icon_menu_container';
import { userIconUrl } from '../../util/urls';
import { Link } from 'react-router-dom';
import { dropdown1 } from '../../util/dropdowns'
import { logout } from '../../actions/session_actions'


class RightTopBar extends React.Component {

    constructor(props) {
        super(props);
    }
   
    render() {
        const userIconDropdown = (
            <IconMenuContainer 
                id='user-icon'
                img={userIconUrl}/>
        );

        const loggedInComponents = [
            <Link 
             to='/writer-dashboard'
             className='orange-button'>
               Writer Dashboard
            </Link>,
            userIconDropdown 
        ];

        const loggedOutComponents = [(< Link to='/sign-up' 
                                        className='orange-button '
                                        id='start-writing'>
                                        Start Writing
                                        </Link>),
                                        (<Link to='/sign-in' 
                                        className='sign-in'>
                                            Sign in</Link>)]

        return (
            <ul id='right-top-bar'>
                < DropDown />
                < DropDown />
                < DropDown />
                {this.props.currentUserId ? (
                    loggedInComponents) : (
                    loggedOutComponents   
                    )}
            </ul>
        )
    }

}

const mSTP = state => ({
    currentUserId: state.session.currentUserId 
})

const mDTP = () => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(RightTopBar)