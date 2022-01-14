import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class IconMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { className: 'hidden' };
        this.toggleReveal = this.toggleReveal.bind(this);
    }

    toggleReveal(e) {
        e.preventDefault();
        const newState = this.state.className === 'hidden' ? 'revealed' : 'hidden';
        this.setState({className: newState})
    }
    
    render() {
        const  img = (<img 
                      src={this.props.img}
                      id='user-icon'/>);
        
        return (
            <div
            id='icon-menu-container' 
            onClick={this.toggleReveal}>
                {img}
                <ul className={this.state.className}>
                    <li onClick={this.props.logout}>
                        logout
                    </li>

                </ul>
            </div>  
        )
    }
} 

const mSTP = () => ({});
const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(IconMenu);

