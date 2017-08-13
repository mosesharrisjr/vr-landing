import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import styles from './global.scss';

const render = () => ReactDOM.render(
  <App />,
    document.getElementById('root')
);

render();
