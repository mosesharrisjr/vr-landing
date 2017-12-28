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

          <div className={[styles.RtableCell, styles.RtableCellHead].join(' ')}><h3>Boston, MA</h3></div>
          <div className={styles.RtableCell}>November 7th, 2017</div>
          <div className={[styles.RtableCell].join(' ')}><a href="https://www.eiseverywhere.com/ereg/index.php?eventid=267848&ref_src=gss" className={styles.button}>Register</a></div>

          <div className={[styles.RtableCell, styles.RtableCellHead].join(' ')}><h3>Dallas, TX</h3></div>
          <div className={styles.RtableCell}>November 15, 2017</div>
          <div className={[styles.RtableCell].join(' ')}><a href="https://www.eiseverywhere.com/ereg/index.php?eventid=267887&ref_src=gss" className={styles.button}>Register</a></div>

          <div className={[styles.RtableCell, styles.RtableCellHead].join(' ')}><h3>Houston, TX</h3></div>
          <div className={styles.RtableCell}>December 14, 2017</div>
          <div className={[styles.RtableCell].join(' ')}><a href="https://www.eiseverywhere.com/ereg/index.php?eventid=267889&ref_src=gss" className={styles.button}>Register</a></div>

        </div>
      </div>
    );

  }

}

export default Events;
