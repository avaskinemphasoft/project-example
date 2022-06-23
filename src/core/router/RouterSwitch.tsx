import React, { FC } from 'react';

import { Path } from 'src/core/router/paths';
import { MainPage } from 'src/views/mainPage/MainPage';
import { ErrorPage } from 'src/components/ErrorPage/ErrorPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RedirectWithQuery } from 'src/core/router/RedirectWithQuery';

export const RouterSwitch: FC = () => (
  <Switch>
    {/*TODO change to <Route exact path={} components={} />*/}
    <Route exact path={Path.MAIN} component={MainPage} />
    <Route exact path={Path.TUTORIAL}>
      This is tutorial
    </Route>
    <Route exact path={Path.PAYOUTS}>
      This is payouts table
    </Route>
    <Route exact path={Path.TOP}>
      This is top of players
    </Route>
    <Route exact path={Path.ERROR_404}>
      Error 404 page
    </Route>
    <Route exact path={Path.ERROR_PAGE} component={ErrorPage} />
    <Route exact path="/">
      <RedirectWithQuery to={Path.MAIN} />
    </Route>
    <Route path="*">
      <Redirect to={Path.ERROR_404} />
    </Route>
  </Switch>
);
