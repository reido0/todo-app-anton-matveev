import { connect } from 'react-redux';
import AddCardModal from './add-card-modal.component';
import {
    setNewCardAction,
    setShowAddNewCardModalAction,
} from '../../store/cards/cards.actions';

const mapDispatchToProps = {
    setNewCard: setNewCardAction,
    setShowAddNewCardModal: setShowAddNewCardModalAction,
};

export default connect(null, mapDispatchToProps)(AddCardModal);
