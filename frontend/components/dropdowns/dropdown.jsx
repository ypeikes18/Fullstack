
import React from 'react';

// //Needs the following or there may be an error:
// //1-Array of elements as options
// //2-Element passed in as an icon for he menu

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.klassName = (this.props.icon ? 
            ('dropdown-icon-container') : ('three-dots-container'))
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
                <div className={this.klassName}>
                    {this.props.icon}
                </div>
                <div className="dropdown">
                    {this.props.options.map( option => (
                        option
                    ))}
                </div>
            </div>
    )
    }
}
     

export default Dropdown;