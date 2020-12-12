import React, { memo } from 'react';
import { applyTo, pipe } from 'ramda';
import { Route, Switch } from 'react-router-dom';

import Signup from 'views/Signup';
import Home from 'views/Home';
import Layout from 'components/Layout';

export default applyTo(() => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Layout>
), pipe(
  memo,
));
