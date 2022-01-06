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
import SignInFormContainer from './user_forms/sign_in_form_container';
import SplashContent from './splash_content/splash_content';
import GetStartedFormContainer from './user_forms/start_writing_form_container'
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import BlogShowContainer from './blog_show/blog_show_container';
import PostShowContainer from './post_show/post_show_container';
import CreateBlogContainer from './blog_forms/create_blog_container';


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
                  < Route exact path='/blogs/:blogId' component={ BlogShowContainer }/>
                  < Route exact path='/blogs/:blogId/posts/:postId' 
                          component={ PostShowContainer }/>
                  <ProtectedRoute exact path="/blogs/new" component={CreateBlogContainer} />

               </Switch>
             </div>)  
    }

}