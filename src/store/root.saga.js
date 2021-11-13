import {
    fork,
    all,
} from 'redux-saga/effects';
import { watchLoginFormSagas } from './loginForm/loginForm.sagas';
import { watchCardsSagas } from './cards/cards.sagas';

export default function* root() {
    yield all([
        fork(watchLoginFormSagas),
        fork(watchCardsSagas),
    ]);
};
