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
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { AuthorizedPosterRoute } from '../util/authorized_route';
import BlogShowContainer from './blog_show/blog_show_container';
import PostShowContainer from './post_show/post_show_container';
import CreateBlogContainer from './blog_forms/create_blog_container';
import EditBlogContainer from './blog_forms/edit_blog_container';

import CreatePostContainer from './post_forms/create_post_form_container';
import WriterDashboard from './writer_dashboard/writer_dashboard';
import BlogBannerContainer from './top_bar/blog_banner_container'
import BlogPostBannerContainer from './top_bar/blog_banner_container'

export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      return (<div>                        
                <Switch>
                  <Route path='/blogs/:blogId/posts' component={ BlogPostBannerContainer }/>
                  <Route path='/blogs/:blogId' component={ BlogBannerContainer }/>
                  <Route path='/' component={ TopBar }/>
                </Switch>            
               
               <Switch>
                  < Route exact path='/' component={ SplashContent }/>
                  < Route path='/account_settings'
                   component={ AccountSettings }/> 
                  < AuthRoute path='/sign-in'
                          component={SignInFormContainer}/> 
                  < AuthRoute path='/sign-up'
                          component={ GetStartedFormContainer }/>
                  < ProtectedRoute exact path="/new-blog" component={CreateBlogContainer} />
                  < ProtectedRoute exact path="/blogs/:blogId/edit" component={EditBlogContainer} />
                  < ProtectedRoute exact path="/blogs/:blogId/new-post" component={CreatePostContainer} />

                  < Route exact path='/blogs/:blogId' component={ BlogShowContainer }/>
                  < Route exact path='/blogs/:blogId/posts/:postId' 
                          component={ PostShowContainer }/>
                  < ProtectedRoute exact path='/blogs/:id/writer-dashboard' component={ WriterDashboard }/>


               </Switch>
             </div>)  
    }

}