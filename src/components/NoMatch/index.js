import React from 'react';
import styles from './styles.scss'

import { Route, Switch } from 'react-router';

import BaseComponent from '../../../custom_modules/react-base';


class NoMatch extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render(){

    return(
      <div className={styles.noMatch}>
        <div className={styles.content}>
          Sorry, that page was not found.
        </div>
      </div>
    );
  }
}

export default NoMatch;
