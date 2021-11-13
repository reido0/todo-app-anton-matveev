import {
  ADD_CARD,
  CHANGE_CARD_STATE_BY_ID,
  DELETE_CARD_BY_ID,
  EDIT_CARD_BY_ID,
  SET_NEW_CARD,
  SET_SHOW_ADD_NEW_CARD_MODAL,
  UPDATE_CARD,
} from './cards.constants';

export const changeCardStateByIdAction = (id, newState) => ({
  type: CHANGE_CARD_STATE_BY_ID,
  id,
  newState,
});

export const deleteCardByIdAction = (id) => ({
  type: DELETE_CARD_BY_ID,
  id,
});

export const editCardByIdAction = (id) => ({
  type: EDIT_CARD_BY_ID,
  id,
});

export const updateCardAction = (updatedCard) => ({
  type: UPDATE_CARD,
  updatedCard,
});

export const addCardAction = (newCard) => ({
  type: ADD_CARD,
  newCard,
});

export const setNewCardAction = (payload) => ({
  type: SET_NEW_CARD,
  payload,
});

export const setShowAddNewCardModalAction = (payload) => ({
  type: SET_SHOW_ADD_NEW_CARD_MODAL,
  payload,
});
