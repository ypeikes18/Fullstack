import React from 'react';

class ThreeDotsDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){  
        e.stopPropagation();
    }

    render() {
        return (
            <div 
            className="dropdown-container" 
            tabIndex="-1"
            onClick={this.handleClick}>
            <div className="three-dots"></div>
                <div className="dropdown">
                    {this.props.options.map( option => (
                        option
                    ))}
                </div>
            </div>
    )
    }
}
     

export default ThreeDotsDropdown;