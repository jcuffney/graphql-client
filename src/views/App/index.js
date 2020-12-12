import React, { memo } from 'react';
import { applyTo, pipe } from 'ramda';
import { Route, Switch } from 'react-router-dom';

import Signup from 'views/Signup';
import Home from 'views/Home';
import ThankYou from 'views/ThankYou';
import Layout from 'components/Layout';
import NotFound from 'components/NotFound';
import Pricing from 'views/Pricing';

export default applyTo(() => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/pricing" exact component={ Pricing } />
      <Route path="/thank-you" exact component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
), pipe(
  memo,
));
