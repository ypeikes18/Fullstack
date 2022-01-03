import React from 'react';
import ReactDOM from 'react-dom';
import { createUser, updateUser, fetchUser } from './actions/user_actions'
import { login, logout } from './actions/session_actions.js'
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.createUser = createUser;
  window.updateUser = updateUser;
  window.login = login;
  window.logout = logout;
  window.fetchUser = fetchUser;
  window.store = store;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
})