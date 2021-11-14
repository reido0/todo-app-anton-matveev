import React from 'react';
import PropTypes from 'prop-types';
import {
    ButtonEdit,
    ButtonDelete,
    ButtonState,
    Container,
    Controls,
    Description,
    TaskName,
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
}) => {
    const xsxs = () => {
        console.log(123);
    };
    return (
        <Container>
            <Controls>
                <ButtonDelete onClick={() => deleteCardById(id)}>Delete</ButtonDelete>
                <ButtonEdit onClick={() => editCardById(id)}>Edit</ButtonEdit>
            </Controls>
            <Title>Task Name:</Title>
            <TaskName>{title}</TaskName>
            <Title>Description:</Title>
            <Description>{description}</Description>
            <Controls>
                <ButtonState
                    disabled={state === CARDS_STATE.TODO}
                    onClick={() => changeCardStateById(id, CARDS_STATE.TODO)}
                >
                    {CARD_STATE_BUTTON.TODO}
                </ButtonState>
                <ButtonState
                    disabled={state === CARDS_STATE.IN_PROGRESS}
                    onClick={() => changeCardStateById(id, CARDS_STATE.IN_PROGRESS)}
                >
                    {CARD_STATE_BUTTON.IN_PROGRESS}
                </ButtonState>
                <ButtonState
                    disabled={state === CARDS_STATE.DONE}
                    onClick={() => changeCardStateById(id, CARDS_STATE.DONE)}
                >
                    {CARD_STATE_BUTTON.DONE}
                </ButtonState>
            </Controls>
        </Container>
    );

}
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
