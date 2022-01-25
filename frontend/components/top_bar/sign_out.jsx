import { connect } from "react-redux";
import React from 'react';
import { logout } from "../../actions/session_actions";

const SignOut = (props) => {
    return(
        <div onClick={props.logout}>
            Sign out
        </div>
    )
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mDTP)(SignOut);

