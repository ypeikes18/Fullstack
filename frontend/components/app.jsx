import React from 'react';
import {
  Route,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom';

import HomeTopBar from './top_bar/home_top_bar';
import AccountDashboard from './account_dashboard/account_dashboard';
import SignInFormContainer from './user_forms/sign_in_form_container';
import SplashContent from './splash_content/splash_content';
import GetStartedFormContainer from './user_forms/start_writing_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { AuthorizedPosterRoute } from '../util/authorized_route';
import BlogShowContainer from './blog_show/blog_show_container';
import PostShowContainer from './post_show/post_show_container';
import CreateBlogContainer from './blog_forms/create_blog_container';
import EditBlogContainer from './blog_forms/edit_blog_container';

import CreatePostContainer from './post_forms/create_post_form_container';
import EditPostContainer from './post_forms/edit_post_form_container';

import BlogBannerContainer from './top_bar/blog_banner_container'
import BlogPostBannerContainer from './top_bar/blog_banner_container'

export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      return (<div>                        
                <Switch>
                  <Route exact path='/blogs/:blogId' component={ BlogBannerContainer }/>
                  <Route path='/blogs/:blogId/posts' component={ BlogPostBannerContainer }/>
                  <Route path='/' component={ HomeTopBar }/>
                </Switch>            
               
               <Switch>
                  < Route exact path='/' component={ SplashContent }/>

                  < AuthRoute path='/sign-in'
                          component={SignInFormContainer}/> 
                  < AuthRoute path='/sign-up'
                          component={ GetStartedFormContainer }/>
                  < ProtectedRoute exact path="/new-blog" component={CreateBlogContainer} />
                  < ProtectedRoute exact path="/blogs/:blogId/edit" component={EditBlogContainer} />
                  < ProtectedRoute exact path="/blogs/:blogId/new-post" component={CreatePostContainer} />
                  < Route path="/blogs/:blogId/posts/:postId/edit" component={EditPostContainer} />

                  < Route exact path='/blogs/:blogId' component={ BlogShowContainer }/>
                  < Route exact path='/blogs/:blogId/posts/:postId' 
                          component={ PostShowContainer }/>
                  < ProtectedRoute exact path='/account-dashboard' component={ AccountDashboard }/>


               </Switch>
             </div>)  
    }

}