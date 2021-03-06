import React from 'react';
import {
    Route,
    Link,
    Routes
  } from 'react-router-dom';

import { subStackURL } from '../../util/urls';

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

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li
                    className='error' 
                    key={i}>
                        {error}
                    </li>
                ))}
            </ul>
        )
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
                            placeholder='Your email'/>);

        const submit =     (<button type='submit'
                            className='orange-button'>
                            {this.props.formType}
                            </button>);

        const nextButton = (<Link to='/sign-up/2'
                             className='orange-button'>
                            Continue
                            </Link>);
        const demoUser = <button id='demo-user-login-button'
                                 type='button' 
                                 onClick={() => this.props.action(
                                 { email: 'demouser@demouser.com', 
                                   password: '123456'})}>
                                Demo user
                          </button>         

        const signUpForm = (<form className='user-form'
                                onSubmit={this.handleSubmit}> 
                                {this.renderErrors()}
                                {name}
                                {bio}
                                {email}
                                {password}
                                {submit}
                                </form> );  

        const loginForm = (<form className='user-form'
                                onSubmit={this.handleSubmit}> 
                                {this.renderErrors()}
                                {email}
                                {password}
                                {submit}
                                {demoUser}
                                </form>); 



        const signInLink = (<p to='/sign-in'>
                            Already have an account? 
                            <span className='orange-span'>
                                <Link to='/sign-in'>
                                    Sign in
                                </Link>    
                            </span>
                            </p>);

        const signUpLink = (<p to='/sign-in'>
                                Don't have an account yet? 
                                <span className='orange-span'>
                                    <Link to='/sign-up'>
                                        Sign up
                                    </Link>    
                                </span>
                            </p>);


        const { formType } = this.props;                                

        return (
            <div id='user-form-container'>
                < img src={window.faviconURL}
                           id='full-stack-icon'/>
                <span>continue to</span>
                <strong>Fullstack</strong>
                {formType === 'Sign in' ? loginForm : signUpForm}
                <div id='other-link'>
                    {formType === 'Sign in' ? signUpLink : signInLink}
                </div>
            </div>
        )
    }
}

export default UserForm;