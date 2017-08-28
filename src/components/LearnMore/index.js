import React from 'react';
import styles from './styles.scss'

import BaseComponent from '../../../custom_modules/react-base';


class LearnMore extends BaseComponent {

  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div className={styles.learnWrapper}>
          <div className={styles.link}>
            <div className={styles.icon}>›</div>
            <div className={styles.cta}>Learn More</div>
          </div>
      </div>
    );
  }
}

export default LearnMore;
