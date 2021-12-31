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
import AccountSettings from './account_settings/account_settings'

export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      return (<div>
               <TopBar/>
               <Routes>
                  <Route path='/account_settings'
                   element={<AccountSettings/>}/>  
               </Routes>
             </div>)  
    }

}