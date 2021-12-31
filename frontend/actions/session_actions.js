import * as SessionApiUtil from '../util/session_api_util'
import { receiveCurrentUser} from '../actions/user_actions.js'


export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECIEVE_SESSION_ERRORS';

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const login = user => dispatch => (
    SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
    )
)

export const logout = () => dispatch => (
    SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
)


