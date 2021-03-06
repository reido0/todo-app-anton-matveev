import React, {
    useEffect,
} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import {
    AddNewCard,
    CardsColumnWrapper,
} from './cards.styles';
import {
    CARDS_COLUMN_TITLE,
    ROUTES,
} from '../../constants';
import CardsColumn from '../cards-column';
import EditCardModal from '../edit-card-modal';
import AddCardModal from '../add-card-modal';
import Header from '../header';
import { Container } from '../../mixins';

const Cards = ({
    cardForEdit,
    doneCards,
    inProgressCards,
    isUserLogged,
    setShowAddNewCardModal,
    showAddNewCardModal,
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
        <>
            <Container>
                <Header />
                <AddNewCard onClick={() => setShowAddNewCardModal(true)}>Add new card +</AddNewCard>
                <CardsColumnWrapper>
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
                </CardsColumnWrapper>
            </Container>
            {cardForEdit && (
                <EditCardModal card={cardForEdit} />
            )}
            {showAddNewCardModal && <AddCardModal />}
        </>
    );
};

Cards.propTypes = {
    cardForEdit: PropTypes.object,
    doneCards: PropTypes.array,
    inProgressCards: PropTypes.array,
    isUserLogged: PropTypes.bool,
    setShowAddNewCardModal: PropTypes.func,
    showAddNewCardModal: PropTypes.bool,
    todoCards: PropTypes.array,
};

export default React.memo(Cards);
