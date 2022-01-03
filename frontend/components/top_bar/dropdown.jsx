import React from 'react';
import { Link, Route } from 'react-router-dom';

export default class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {className: 'hidden'};
    }

    toggleReveal() {
        e.preventDefault();
        newState = this.state.className === 'hidden' ? '' : 'hidden';
        this.setState({className: newState})
    }
    
    render() {
        const options = this.props.options;
        let content = <></>;
        if(options) {
            content = options.map((option, i) =>
            <li key={i}
                className={this.state.className}>
                <Link to={option.link}>{option.name}</Link>
            </li>);
        }
        
        return (
            <div>
                <ul>
                    Dropdown
                </ul>
            </div>  
        )
    }

} 