import { connect } from 'react-redux';
import Header from './header.component';
import { getCurrentUserData } from '../../store/loginForm/loginForm.selectors';
import { logoutAction } from '../../store/loginForm/loginForm.actions';
import { setThemeAction } from '../../store/theme/theme.actions';
import { getThemeVariant } from '../../store/theme/theme.selectors';

const mapStateToProps = (state) => ({
    userData: getCurrentUserData(state),
    themeVariant: getThemeVariant(state),
});

const mapDispatchToProps = {
    logout: logoutAction,
    setTheme: setThemeAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
