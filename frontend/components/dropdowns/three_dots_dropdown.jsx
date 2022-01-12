import React from 'react';

const ThreeDotsDropdown = (props) => {
    return (
            <div className="dropdown-container" tabIndex="-1">
            <div className="three-dots"></div>
            <div className="dropdown">
                {props.options.map( option => (
                    option
                ))}
            </div>
        </div>
    )
}

export default ThreeDotsDropdown;