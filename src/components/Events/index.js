import React from 'react';
import styles from './styles.scss'

import BaseComponent from '../../../custom_modules/react-base';


class Events extends BaseComponent {

  constructor(props) {
    super(props);
  }

  render(){

    return(
      <div className={styles.eventsWrapper}>
        <h2>Immerse yourself in Virtual Reality at our upcoming Dell EMC Forums</h2>
        <div className={[styles.Rtable,styles.Rtable3cols, styles.RtableCollapse].join(' ')}>

          <div className={[styles.RtableCell, styles.RtableCellHead].join(' ')}><h3>Long Beach, CA</h3></div>
          <div className={styles.RtableCell}>September 13, 2017</div>
          <div className={[styles.RtableCell].join(' ')}><a href="https://www.eiseverywhere.com/ereg/index.php?eventid=266378&reference=sales" className={styles.button}>Register</a></div>

          <div className={[styles.RtableCell, styles.RtableCellHead].join(' ')}><h3>New York, NY</h3></div>
          <div className={styles.RtableCell}>October 11, 2017</div>
          <div className={[styles.RtableCell].join(' ')}><a href="https://www.eiseverywhere.com/ereg/index.php?eventid=266406&reference=sales" className={styles.button}>Register</a></div>

          <div className={[styles.RtableCell, styles.RtableCellHead].join(' ')}><h3>Chicago, IL</h3></div>
          <div className={styles.RtableCell}>October 18, 2017</div>
          <div className={[styles.RtableCell].join(' ')}><a href="https://www.eiseverywhere.com/ereg/index.php?eventid=267846&reference=sales" className={styles.button}>Register</a></div>

        </div>
      </div>
    );

  }

}

export default Events;
