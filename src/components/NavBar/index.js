import React from 'react';
import styles from './styles.scss'

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <div className={styles.mobile}>

        </div>
        <div className={styles.desktop}>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default NavBar;
