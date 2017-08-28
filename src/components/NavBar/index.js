import React from 'react';
import styles from './styles.scss'

import BaseComponent from '../../../custom_modules/react-base';

const menuItems = [
  {
    url: 'https://www.linkedin.com/shareArticle?mini=true&url='+ encodeURIComponent(window.location) +'&title=Dell%20Technologies%20Virtual%20Reality&summary=Experience%20transformational%20stories%20in%20Virtual%20Reality.',
    image: 'linkedin.svg',
    content: null,
  },
  {
    url: 'https://www.facebook.com/sharer/sharer.php?u='+ encodeURIComponent(window.location),
    image: 'facebook.svg',
    content: null,
  },
  {
    url: 'https://twitter.com/intent/tweet?url='+ encodeURIComponent(window.location) +'&text=Dell%20Technologies%20Virtual%20Reality&via=DellTech',
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

  handleClick(url){
    console.log(url);
    window.location = url;
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
            <img src="/images/dell_technologies.svg" />
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
            <img src="/images/dell_technologies.svg" />
          </div>
          <div className={styles.contentRight}>

            <ul>
              {
                menuItems.map((item,index) => {
                  return(
                    <li key={index}><a target='_blank' href={item.url}>
                      {item.image &&
                        <img src={'/images/' + item.image} />
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
                <li key={index} onClick={() => {this.handleClick(item.url)}}>
                     {item.image &&
                       <img src={'/images/' + item.image} />
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
