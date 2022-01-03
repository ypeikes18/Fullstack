import * as UserApiUtil from '../util/user_api_util'
import { receiveErrors } from './session_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({    
    type: RECEIVE_USER,
    user
})

//may not be needed
export const fetchUser = userId => dispatch => (
    UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
    ) 
)

export const createUser = user => dispatch => (
    UserApiUtil.createUser(user)
    .then(user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
    ) 
)

export const updateUser = user => dispatch => (
    UserApiUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
    ) 
)

