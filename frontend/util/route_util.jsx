import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            < Redirect to={'/'} />
        ) : (
            < Component {...props}/>
        )
    )}/>

)

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            < Redirect to={'/sign-in'} />
        ) : (
            < Component {...props}/>
        )
    )}/>

)

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUserId)
})

const mDTP = () => ({});

export const AuthRoute = withRouter(
    connect(mSTP, mDTP)(Auth)
);

export const ProtectedRoute = withRouter(
    connect(mSTP, mDTP)(Protected)
);
