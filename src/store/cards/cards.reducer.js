import {
    ADD_CARD,
    CHANGE_CARD_STATE_BY_ID,
    DELETE_CARD_BY_ID,
    EDIT_CARD_BY_ID,
    SET_SHOW_ADD_NEW_CARD_MODAL,
    UPDATE_CARD,
} from './cards.constants';
import { MOCKED_CARDS } from '../../constants';

const initialState = {
    cards: MOCKED_CARDS,
    editCardId: '',
    showAddNewCardModal: false,
};

export const cards = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case CHANGE_CARD_STATE_BY_ID:
            const updatedCards = state.cards;

            updatedCards.forEach((card) => {
                if (card.id === action.id) {
                    card.state = action.newState;
                }
            });
            
            return {
                ...state,
                cards: [...updatedCards],
            };
        case DELETE_CARD_BY_ID:
            const filteredCards = state.cards.filter((card) => card.id !== action.id);
            
            return {
                ...state,
                cards: [...filteredCards],
            };
        case EDIT_CARD_BY_ID:
            return {
                ...state,
                editCardId: action.id,
            };
        case UPDATE_CARD:
            const { id, title, description } = action.updatedCard;
            const allCards = state.cards;

            allCards.forEach((card) => {
                if (card.id === id) {
                    card.title = title;
                    card.description = description;
                }
            });

            return {
                ...state,
                cards: [...allCards],
            };
        case ADD_CARD:
            const currentAllCards = state.cards;

            currentAllCards.push({
                ...action.newCard,
            });

            return {
                ...state,
                cards: [...currentAllCards],
            };
        case SET_SHOW_ADD_NEW_CARD_MODAL:
            return {
                ...state,
                showAddNewCardModal: action.payload,
            };
        default:
            return state;
    };
};
