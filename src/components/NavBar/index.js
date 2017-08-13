import React from 'react';
import styles from './styles.scss'


const menuItems = {

}


class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className={styles.navBar}>
        <div className={styles.mobile}>

        </div>
        <div className={styles.desktop}>
          <div className={styles.contentLeft}>
            <img src="images/dell_technologies.svg" />
          </div>
          <div className={styles.contentRight}>
            <ul>

            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default NavBar;
