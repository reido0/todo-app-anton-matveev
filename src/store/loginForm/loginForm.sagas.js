import {
    put,
    takeEvery,
} from 'redux-saga/effects';
import { SET_LOGIN_AND_PASSWORD } from './loginForm.constants';
import { MOCKED_USERS } from '../../constants';
import {
    setIsUserLoggedAction,
    setUserIdAction,
} from './loginForm.actions';

function* setLoginAndPasswordSaga(action) {
    const { login, password } = action.payload;
    const hasUserLogin = MOCKED_USERS.find((user) => user.login === login);

    if (hasUserLogin) {
        if (hasUserLogin.password === password) {
            yield put(setIsUserLoggedAction(true));
            yield put(setUserIdAction(hasUserLogin.id));
        } else {
            //incorrect password
            yield put(setIsUserLoggedAction(false));
        }
    } else {
        //no matched user login
        yield put(setIsUserLoggedAction(false));
    }
};

export function* watchLoginFormSagas() {
    yield takeEvery(SET_LOGIN_AND_PASSWORD, setLoginAndPasswordSaga);
};
