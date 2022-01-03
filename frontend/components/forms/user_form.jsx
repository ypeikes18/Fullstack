import React from 'react';
import {
    useNavigate,
    Route,
    Link,
    Routes
  } from 'react-router-dom';
class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.action(this.state);
    }

    update(field) {
        return e => {
            e.preventDefault();
            this.setState({[field]: e.currentTarget.value});
        }
    }

    render() {
        const name = (  <input type='text'
                        value={this.state.name}
                        onChange={this.update('name')}
                        placeholder='Your name'/>);
                        
        const bio = (  <textarea type='text'
                        value={this.state.bio}
                        onChange={this.update('bio')}
                        placeholder='Your bio'/>);

        const password = ( <input type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder='Your password'/>)  
                            
        const email =      (<input type='text'
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder='Your Email'/>);

        const submit =     (<button type='submit'
                            className='orange-button'
                            onChange={this.update('password')}>
                            {this.props.formType}
                            </button>);

        const nextButton = (<Link to='/sign-up/2'
                             className='orange-button'>
                            Continue
                            </Link>);
        const demoUser = <button id='demo-user-login-button' 
                                 onClick={() => this.props.action(
                                 { email: 'demouser@demouser.com', 
                                   password: '123456'})}>
                                Demo user
                          </button>         

        const infoForm = (<form className='user-form'
                                onSubmit={this.handleSubmit}> 
                                {name}
                                {bio}
                                {email}
                                {password}
                                {submit}
                                </form> );  

        const credentialsForm = (<form className='user-form'
                                onSubmit={this.handleSubmit}> 
                                {email}
                                {password}
                                {submit}
                                {demoUser}
                                </form>); 

        return (
            <div className='user-form-page'>
                {this.props.formType === 'Sign in' ? credentialsForm : infoForm}
            </div>
        )
    }
}

export default UserForm;