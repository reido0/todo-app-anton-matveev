import {
    call,
    put,
    select,
    takeEvery,
} from 'redux-saga/effects';
import {
    CHECK_LOGIN_AND_PASSWORD,
    REGISTER_NEW_USER,
} from './loginForm.constants';
import {
    addNewUserDataAction,
    setIsUserLoggedAction,
    setUserIdAction,
} from './loginForm.actions';
import { getUsers } from './loginForm.selectors';

function* setLoginAndPasswordSaga(login, password) {
    const currentUsers = yield select(getUsers);
    const hasUserLogin = currentUsers.find((user) => user.login === login);

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

function* checkLoginAndPasswordSaga(action) {
    const { login, password } = action.payload;

    yield call(setLoginAndPasswordSaga, login, password);
};

function* registerNewUserSaga(action) {
    const { login, password, userName } = action.payload;
    const currentUsers = yield select(getUsers);

    yield put(addNewUserDataAction({
        id: String(currentUsers.length + 1),
        login,
        password,
        userName,
    }));

    yield call(setLoginAndPasswordSaga, login, password);
};

export function* watchLoginFormSagas() {
    yield takeEvery(CHECK_LOGIN_AND_PASSWORD, checkLoginAndPasswordSaga);
    yield takeEvery(REGISTER_NEW_USER, registerNewUserSaga);
};
