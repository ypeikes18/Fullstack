import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';
import UserForm from './user_form';

const mSTP = () => ({
    formType: 'Sign up',
    user: { email: '',
            password: '',
            bio: '',
            name: '' }

})

const mDTP = dispatch => ({
    action: (user) => dispatch(createUser(user))
})

export default connect(mSTP, mDTP)(UserForm)
