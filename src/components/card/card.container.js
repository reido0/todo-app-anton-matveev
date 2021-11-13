import { connect } from 'react-redux';
import Card from './card.component';
import {
    changeCardStateByIdAction,
    deleteCardByIdAction,
    editCardByIdAction,
} from '../../store/cards/cards.actions';

const mapDispatchToProps = {
    changeCardStateById: changeCardStateByIdAction,
    deleteCardById: deleteCardByIdAction,
    editCardById: editCardByIdAction,
};

export default connect(null, mapDispatchToProps)(Card);
