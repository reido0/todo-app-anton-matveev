import React, {
    useEffect,
} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import {
    StyledContainer,
} from './cards.styles';
import {
    CARDS_COLUMN_TITLE,
    ROUTES,
} from '../../constants';
import CardsColumn from '../cards-column';

const Cards = ({
    doneCards,
    inProgressCards,
    isUserLogged,
    todoCards,
}) => {
    const history = useHistory();

    useEffect(() => {
        if (!isUserLogged) {
            history.push(ROUTES.LOGIN);
        }
    }, [
        history,
        isUserLogged,
    ]);

    return (
        <StyledContainer>
            <CardsColumn
                title={CARDS_COLUMN_TITLE.TODO}
                cards={todoCards}
            />
            <CardsColumn
                title={CARDS_COLUMN_TITLE.IN_PROGRESS}
                cards={inProgressCards}
            />
            <CardsColumn
                title={CARDS_COLUMN_TITLE.DONE}
                cards={doneCards}
            />
        </StyledContainer >
    );
};

Cards.propTypes = {
    doneCards: PropTypes.array,
    inProgressCards: PropTypes.array,
    isUserLogged: PropTypes.bool,
    todoCards: PropTypes.array,
};

export default React.memo(Cards);
