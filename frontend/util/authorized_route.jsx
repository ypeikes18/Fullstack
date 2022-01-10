import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Authorized = ({ component: Component, path, authorized, match, exact }) => (
    <Route path={path} exact={exact} match={match} render={(props) => (
        !authorized ? (
            < Redirect to={'/'} />
        ) : (
            < Component {...props}/>
        )
    )}/>
)

const mSTP = (state, ownProps) => {
    const currentUserId = state.session.currentUserId;
    const blogId = ownProps.match.params.blogId;
    const blogAuthorId = state.entities.blogs[blogId][author_id];
    return {
        authorized: currentUserId ===  blogAuthorId
    }
}

const mDTP = () => ({});

export const AuthorizedPosterRoute = withRouter(
    connect(mSTP, mDTP)(Authorized)
);
