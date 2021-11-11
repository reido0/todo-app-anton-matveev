import { connect } from 'react-redux';
import LoginForm from './loginForm.component';
import { setLoginAndPasswordAction } from '../../store/loginForm/loginForm.actions';
import { getIsUserLogged } from '../../store/loginForm/loginForm.selectors';

const mapStateToProps = (state) => ({
    isUserLogged: getIsUserLogged(state),
});

const mapDispatchToProps = {
    setLoginAndPassword: setLoginAndPasswordAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
