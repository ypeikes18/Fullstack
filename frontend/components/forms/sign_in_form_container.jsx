import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import UserForm from './user_form';

const mSTP = () => ({
    formType: 'Sign in',
    user: { email: '',
            password: ''}
})

const mDTP = dispatch => ({
    action: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(UserForm)

