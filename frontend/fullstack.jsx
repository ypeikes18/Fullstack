import React from 'react';
import ReactDOM from 'react-dom';
import { createUser, updateUser, fetchUser } from './actions/user_actions'
import { login, logout } from './actions/session_actions.js'
import configureStore from './store/store';
import Root from './components/root';

import { createBlog, 
         deleteBlog, 
         fetchBlog, 
         updateBlog } 
        from './actions/blog_actions.js'


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser) {
    const id = window.currentUser.id;
    const preloadedState = {
      session: { currentUserId: id },
      entities: { 
        users: { [id]: currentUser } 
      }         
    };
    store = configureStore(preloadedState);
    delete window.currentUser; 
  } else {
    store = configureStore();
  }

  window.createUser = createUser;
  window.updateUser = updateUser;
  window.login = login;
  window.logout = logout;
  window.fetchUser = fetchUser;
  window.store = store;
  window.createBlog = createBlog;
  window.deleteBlog = deleteBlog;
  window.fetchBlog = fetchBlog;
  window.updateBlog = updateBlog;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
})