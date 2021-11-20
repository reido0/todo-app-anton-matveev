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
import Theme from '../theme';

const App = () => (
  <Provider store={store}>
    <Theme>
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
    </Theme>
  </Provider>
);

export default React.memo(App);
