import React from 'react';
import { Switch, Route } from 'react-router-dom';


import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Home from '../containers/Home';
import NoMatch from '../components/NoMatch';
import Video from '../containers/Video';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path='/site' component={Home}/>
      <Route exact path='/site/Forums' component={Home}/>
      <Route path='/site/:slug' component={Video}/>
      <Route path='*' component={NoMatch}/>
    </Switch>
    <Footer />
  </div>
);

export default routes;
