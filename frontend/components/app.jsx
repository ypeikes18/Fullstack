import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  Routes
} from 'react-router-dom';

import TopBar from './top_bar/top_bar';
import AccountSettings from './account_settings/account_settings';
import SignInFormContainer from './forms/sign_in_form_container';
import SplashContent from './splash_content/splash_content';
import GetStartedFormContainer from './forms/start_writing_form_container'
import { AuthRoute, ProtectedRoute} from '../util/route_util'

export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      return (<div>
               <TopBar/>
               <Switch>
                  < Route exact path='/' component={ SplashContent }/>
                  < Route path='/account_settings'
                   component={ AccountSettings }/> 
                  < AuthRoute path='/sign-in'
                          component={SignInFormContainer}/> 
                  < AuthRoute path='/sign-up'
                          component={ GetStartedFormContainer }/>                    
               </Switch>
             </div>)  
    }

}