import React from 'react';
import { withRouter } from 'react-router-dom';

const BackButtonBar = props => {
    return (
        <div className='back-button-bar'>
            <div 
            className='back-button'
            onClick={props.history.goBack}>
            </div>
        </div>
    )
}

export default withRouter(BackButtonBar);