import { createSelector } from 'reselect';
import get from 'lodash/fp/get';
import { CARDS_STATE } from '../../constants';
import { getUserId } from '../loginForm/loginForm.selectors';

const getState = (state) => state;

export const getCards = createSelector(
  [getState],
  get('cards'),
);

export const getCardsFromCards = createSelector(
  [getCards],
  get('cards'),
);

export const getCardsForCurrentUser = createSelector(
  [getCardsFromCards, getUserId],
  (cards, userId) => cards.filter((card) => card.owner === userId),
);

export const getTodoCards = createSelector(
  [getCardsForCurrentUser],
  (cards) => cards.filter((card) => card.state === CARDS_STATE.TODO),
);

export const getInProgressCards = createSelector(
  [getCardsForCurrentUser],
  (cards) => cards.filter((card) => card.state === CARDS_STATE.IN_PROGRESS),
);

export const getDoneCards = createSelector(
  [getCardsForCurrentUser],
  (cards) => cards.filter((card) => card.state === CARDS_STATE.DONE),
);

export const hasCardForEdit = createSelector(
  [getCards],
  get('editCardId'),
);

export const getCardForEditById = createSelector(
  [getCardsFromCards, hasCardForEdit],
  (cards, editCardId) => cards.find((card) => card.id === editCardId),
);

export const shouldShowAddNewCardModal = createSelector(
  [getCards],
  get('showAddNewCardModal'),
);
