import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import TopBar from './top_bar/top_bar';

export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      return (<div>
               <TopBar/>
             </div>)  
    }

}