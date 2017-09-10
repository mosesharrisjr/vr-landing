import React from 'react';
import styles from './styles.scss'

import {PropTypes} from "react-metrics";

import BaseComponent from '../../../custom_modules/react-base';

const menuItems = [
  {
    url: 'https://www.linkedin.com/shareArticle?mini=true&url='+ encodeURIComponent(window.location) +'&title=Dell%20Technologies%20Virtual%20Reality&summary=Experience%20transformational%20stories%20in%20Virtual%20Reality.',
    image: 'linkedin.svg',
    type: 'LinkedIn Share Button',
    content: null,
  },
  {
    url: 'https://www.facebook.com/sharer/sharer.php?u='+ encodeURIComponent(window.location),
    image: 'facebook.svg',
    type: 'Facebook Share Button',
    content: null,
  },
  {
    url: 'https://twitter.com/intent/tweet?url='+ encodeURIComponent(window.location) +'&text=Dell%20Technologies%20Virtual%20Reality&via=DellTech',
    image: 'twitter.svg',
    type: 'Twitter Share Button',
    content: null,
  },
  {
    url: 'https://marketing.dell.com/en/vr',
    image: null,
    type: 'Learn More Button',
    content: 'Learn More',
  }
];


class NavBar extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
    };
    this._bind('toggleMobileMenu','trackingHandler');
  }

  static contextTypes = {
    metrics: PropTypes.metrics
  };

  toggleMobileMenu() {
    this.setState({ mobileMenu: !this.state.mobileMenu });
  }

  trackingHandler(type){
    this.context.metrics.track(type,);
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
            <a href='//www.delltechnologies.com'><img src="/images/dell_technologies.svg" /></a>
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
            <a href='//www.delltechnologies.com'><img src="/images/dell_technologies.svg" /></a>
          </div>
          <div className={styles.contentRight}>

            <ul>
              {
                menuItems.map((item,index) => {
                  return(
                    <li key={index}><a target='_blank' onClick={()=>{this.trackingHandler(item.type)}} href={item.url}>
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
                <li key={index}><a target='_blank' onClick={() => {this.trackingHandler(item.type)}} href={item.url}>
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
    );
  }
}

export default NavBar;
