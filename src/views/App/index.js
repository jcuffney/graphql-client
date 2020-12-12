import React, { memo } from 'react';
import { applyTo, pipe } from 'ramda';
import { Route, Switch } from 'react-router-dom';

import Signup from 'views/Signup';
import Home from 'views/Home';

export default applyTo(() => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" exact component={Signup} />
    {/* <Route component={NotFound} /> */}
  </Switch>
), pipe(
  memo,
));
