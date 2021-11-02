import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import LoginForm from '../loginForm';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
      >
        <LoginForm />
      </Route>
      <Route
        path="/cards"
        exact
      >
        <div>Cards</div>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default React.memo(App);
