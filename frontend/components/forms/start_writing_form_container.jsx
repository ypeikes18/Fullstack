import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';
import UserForm from './user_form';

const mSTP = state => ({
    formType: 'Sign up',
    user: { email: '',
            password: '',
            bio: '',
            name: '' },
    errors: state.errors.session
})

const mDTP = dispatch => ({
    action: (user) => dispatch(createUser(user))
})

export default connect(mSTP, mDTP)(UserForm)
