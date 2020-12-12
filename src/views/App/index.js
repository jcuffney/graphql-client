import React, { memo } from 'react';
import { applyTo, pipe } from 'ramda';
import { Route, Switch } from 'react-router-dom';

import Signup from 'views/Signup';
import Home from 'views/Home';
import ThankYou from 'views/ThankYou';
import Layout from 'components/Layout';
import NotFound from 'components/NotFound';
import Pricing from 'views/Pricing';
import FAQ from 'views/FAQ';
import Contact from 'views/Contact';
import Terms from 'views/Terms';
import Privacy from 'views/Privacy';

import useTracking from 'lib/useTracking';

export default applyTo(() => {
  useTracking();
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/pricing" exact component={ Pricing } />
        <Route path="/thank-you" exact component={ThankYou} />
        <Route path='/faq' exact component={ FAQ } />
        <Route path='/contact' exact component={ Contact } />
        <Route path='/terms' exact component={ Terms } />
        <Route path='/privacy' exact component={ Privacy } />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}, pipe(
  memo,
));
