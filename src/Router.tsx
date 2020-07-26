import React from 'react';
import { Route, Switch } from 'react-router';
import { CreateTheme, CreateJoke, Home } from './pages';

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/createtheme"} component={CreateTheme} />
      <Route path={"/joke/create(/:id)?"} component={CreateJoke} />
      <Route exaxt path={"(/)?"} component={Home} />
    </Switch>
  );
}

export default Router;