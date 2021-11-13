import { connect } from 'react-redux';
import Cards from './cards.component';
import { getIsUserLogged } from '../../store/loginForm/loginForm.selectors';
import {
    getCardForEditById,
    getDoneCards,
    getInProgressCards,
    getTodoCards,
    shouldShowAddNewCardModal,
} from '../../store/cards/cards.selectors';
import { setShowAddNewCardModalAction } from '../../store/cards/cards.actions';

const mapStateToProps = (state) => ({
    cardForEdit: getCardForEditById(state),
    doneCards: getDoneCards(state),
    inProgressCards: getInProgressCards(state),
    isUserLogged: getIsUserLogged(state),
    showAddNewCardModal: shouldShowAddNewCardModal(state),
    todoCards: getTodoCards(state),
});

const mapDispatchToProps = {
    setShowAddNewCardModal: setShowAddNewCardModalAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
