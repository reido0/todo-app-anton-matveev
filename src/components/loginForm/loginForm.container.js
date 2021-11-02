import { connect } from 'react-redux';
import LoginForm from './loginForm.component';
import { setLoginAndPasswordAction } from '../../store/loginForm/loginForm.actions';

const mapDispatchToProps = {
    setLoginAndPassword: setLoginAndPasswordAction,
};

export default connect(null, mapDispatchToProps)(LoginForm);
