import React from 'react';
import { Route, Switch } from 'react-router';
import { CreateTheme, Home } from './templates';

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/createtheme"} component={CreateTheme} />
      <Route exaxt path={"(/)?"} component={Home} />
    </Switch>
  );
}

export default Router;