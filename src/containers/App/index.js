import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../../routes';

import {metrics} from 'react-metrics';
import MetricsConfig from '../../../config/metrics/config';


class App extends React.Component {

  static propTypes = {
    history: PropTypes.object,
  };

  render(){
    return(
      <ConnectedRouter history={this.props.history} location="hash">
        {routes}
      </ConnectedRouter>
    );
  }

}

export default metrics(MetricsConfig)(App);
