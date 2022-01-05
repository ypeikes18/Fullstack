import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import UserForm from './user_form';

const mSTP = state => ({
    formType: 'Sign in',
    user: { email: '',
            password: ''},
    errors: state.errors.session
})

const mDTP = dispatch => ({
    action: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(UserForm)

