import React from 'react';
import { Route, Switch } from 'react-router-dom';

import pages from './static/pages/pages';

const Routes = () => (
  <Switch>
    {pages.map(page => (
      <Route key={page.url} path={page.url} component={page.component} />
    ))}
  </Switch>
);

export default Routes;
