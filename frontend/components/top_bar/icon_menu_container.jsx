import React from 'react';
import { connect } from 'react-redux';

class IconMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { className: 'hidden' };
        this.toggleReveal = this.toggleReveal.bind(this);
    }

    toggleReveal(e) {
        e.preventDefault();
        const newState = this.state.className === 'hidden' ? '' : 'hidden';
        this.setState({className: newState})
    }
    
    render() {
        const  img = (<img 
                      src={this.props.img}
                      id='user-icon'/>);
        
        return (
            <div 
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

