import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Controls,
    Description,
    StateButton,
    Title,
} from './card.styles';
import {
    CARD_STATE_BUTTON,
    CARDS_STATE,
} from '../../constants';

const Card = ({
    changeCardStateById,
    deleteCardById,
    description,
    editCardById,
    id,
    state,
    title,
}) => (
    <Container>
        <button onClick={() => deleteCardById(id)}>Delete</button>
        <button onClick={() => editCardById(id)}>Edit</button>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Controls>
            <StateButton
                disabled={state === CARDS_STATE.TODO}
                onClick={() => changeCardStateById(id, CARDS_STATE.TODO)}
            >
                {CARD_STATE_BUTTON.TODO}
            </StateButton>
            <StateButton
                disabled={state === CARDS_STATE.IN_PROGRESS}
                onClick={() => changeCardStateById(id, CARDS_STATE.IN_PROGRESS)}
            >
                {CARD_STATE_BUTTON.IN_PROGRESS}
            </StateButton>
            <StateButton
                disabled={state === CARDS_STATE.DONE}
                onClick={() => changeCardStateById(id, CARDS_STATE.DONE)}
            >
                {CARD_STATE_BUTTON.DONE}
            </StateButton>
        </Controls>
    </Container>
);

Card.propTypes = {
    changeCardStateById: PropTypes.func,
    deleteCardById: PropTypes.func,
    description: PropTypes.string,
    editCardById: PropTypes.func,
    id: PropTypes.string,
    state: PropTypes.string,
    title: PropTypes.string,
};

export default React.memo(Card);
