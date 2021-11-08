import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import LoginForm from '../loginForm';
import Cards from '../cards';
import { ROUTES } from '../../constants';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route
          path={ROUTES.LOGIN}
          exact
        >
          <LoginForm />
        </Route>
        <Route
          path={ROUTES.CARDS}
          exact
        >
          <Cards />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default React.memo(App);
