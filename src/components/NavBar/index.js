import React from 'react';
import styles from './styles.scss'

import BaseComponent from '../../../custom_modules/react-base';

const menuItems = [
  {
    url: '',
    image: 'linkedin.svg',
    content: null,
  },
  {
    url: '',
    image: 'facebook.svg',
    content: null,
  },
  {
    url: '',
    image: 'twitter.svg',
    content: null,
  },
  {
    url: '',
    image: null,
    content: 'Contact Us',
  }
];


class NavBar extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('handleClick');
  }

  handleClick(){

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
              {
                menuItems.map((item,index) => {
                  return(
                    <li key={index}><a onClick={this.handleClick}>
                      {item.image &&
                        <img src={'images/' + item.image} />
                      }
                      {item.content &&
                      item.content
                      }
                      </a></li>
                  );
                })}
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default NavBar;
