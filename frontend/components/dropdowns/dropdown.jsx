import React from 'react';

// //Needs the following or there may be an error:
// //1-Array of elements as options
// //2-Element passed in as an icon for he menu

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
        this.handleFocus = this.handleFocus.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.showOptions = this.showOptions.bind(this);
        this.klassName = (this.props.icon ? 
            ('dropdown-icon-container') : ('three-dots-container'))
    }

    handleClick(e) {
        e.stopPropagation();
        debugger
    }

    handleFocus(e) {
        e.stopPropagation();
        debugger
        this.setState({ open: true })  
    }

    handleBlur(e) {
        this.setState({ open: false })  
    }

    showOptions() {
        if(!this.state.show) return null;

        return  (<div className="dropdown">
                    {this.props.options.map( option => (
                        option
                    ))}
                </div>)
    }

    render() {

        return (
            <div 
            className="dropdown-container" 
            onClick={this.handleClick}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}>
                <div 
                className={this.klassName}>
                    {this.props.icon}
                </div>
                {this.showOptions()}
            </div>
    )
    }
}
     

export default Dropdown;