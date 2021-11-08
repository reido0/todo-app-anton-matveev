import { connect } from 'react-redux';
import Cards from './cards.component';
import {
    getIsUserLogged,
    getUserId,
} from '../../store/loginForm/loginForm.selectors';

const mapStateToProps = (state) => ({
    isUserLogged: getIsUserLogged(state),
    userId: getUserId(state),
});

export default connect(mapStateToProps)(Cards);
