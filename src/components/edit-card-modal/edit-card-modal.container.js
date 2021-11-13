import { connect } from 'react-redux';
import EditCardModal from './edit-card-modal.component';
import {
    editCardByIdAction,
    updateCardAction,
} from '../../store/cards/cards.actions';

const mapDispatchToProps = {
    editCardById: editCardByIdAction,
    updateCard: updateCardAction,
};

export default connect(null, mapDispatchToProps)(EditCardModal);
