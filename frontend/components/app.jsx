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

export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      return (<div>
               <TopBar/>
               <Routes>
                  < Route path='/' element={< SplashContent/>}/>
                  < Route path='/account_settings'
                   element={<AccountSettings/>}/> 
                  < Route path='/sign-in'
                          element={<SignInFormContainer/>}/> 
                  < Route path='/sign-up'
                          element={<GetStartedFormContainer/>}>    
                    < Route path='sign-up/2'
                          element={<GetStartedFormContainer/>}/>   
                  </ Route >                
               </Routes>
             </div>)  
    }

}