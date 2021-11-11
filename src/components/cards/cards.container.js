import { connect } from 'react-redux';
import Cards from './cards.component';
import { getIsUserLogged } from '../../store/loginForm/loginForm.selectors';
import {
    getDoneCards,
    getInProgressCards,
    getTodoCards,
} from '../../store/cards/cards.selectors';

const mapStateToProps = (state) => ({
    doneCards: getDoneCards(state),
    inProgressCards: getInProgressCards(state),
    isUserLogged: getIsUserLogged(state),
    todoCards: getTodoCards(state),
});

export default connect(mapStateToProps)(Cards);
