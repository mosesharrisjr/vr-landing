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
    content: 'Learn More',
  }
];


class NavBar extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
    };
    this._bind('handleClick','toggleMobileMenu');
  }

  toggleMobileMenu() {
    this.setState({ mobileMenu: !this.state.mobileMenu });
  }

  handleClick(){

  }

  render(){

    const closedStyles = this.state.mobileMenu ? '' : styles.closed;

    const menuIcon = this.state.mobileMenu ? 'close' : 'menu';

    const height = {
      height: `${(52) + 24}px`,
    };

    return(
      <div className={styles.navBar}>
        <div className={styles.mobile}>
          <div className={styles.contentLeft}>
            <img src="images/dell_technologies.svg" />
          </div>
          <div className={styles.contentRight}>
            <div onClick={this.toggleMobileMenu}>
                <div className={[styles.hamburger, closedStyles].join(' ')}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
            </div>
          </div>
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
        <div style={height} className={[styles.mobileMenu, closedStyles].join(' ')}>
          <ul>
            {menuItems.map((item,index) => {
              return (
                <li key={index} onClick={this.handleClick}>
                     {item.image &&
                       <img src={'images/' + item.image} />
                     }
                     {item.content &&
                     item.content
                     }
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
