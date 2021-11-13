import {
  put,
  select,
  takeEvery,
} from 'redux-saga/effects';
import { SET_NEW_CARD } from './cards.constants';
import { addCardAction } from './cards.actions';
import { getUserId } from '../loginForm/loginForm.selectors';
import { getCardsFromCards } from './cards.selectors';
import { CARDS_STATE } from '../../constants';

function* addNewCardSaga(action) {
  const result = action.payload;
  const owner = yield select(getUserId);
  const id = yield select(getCardsFromCards);

  result.id = String(id.length + 1);
  result.owner = owner;
  result.state = CARDS_STATE.TODO;

  yield put(addCardAction(result));
};

export function* watchCardsSagas() {
  yield takeEvery(SET_NEW_CARD, addNewCardSaga);
};
