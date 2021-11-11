import {
    applyMiddleware,
    combineReducers,
    createStore,
    compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import root from './root.saga';
import { cards } from './cards/cards.reducer';
import { loginForm } from './loginForm/loginForm.reducer';

export const rootReducer = combineReducers({
    cards,
    loginForm,
});

// проверка на девелопер мод и девтулы
const composeEnhancers = process.env.NODE_ENV === 'development'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
    applyMiddleware(
        sagaMiddleware,
    )
);

export const store = createStore(rootReducer, {}, enhancer);

sagaMiddleware.run(root).toPromise().catch((e) => {
    console.error(e);
});
