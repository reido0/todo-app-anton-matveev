import {
    fork,
    all,
} from 'redux-saga/effects';
import { watchLoginFormSagas } from './loginForm/loginForm.sagas';

export default function* root() {
    yield all([
        fork(watchLoginFormSagas),
    ]);
};
