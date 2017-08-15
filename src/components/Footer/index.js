import React from 'react';
import styles from './styles.scss'

import BaseComponent from '../../../custom_modules/react-base';

const logos = [
  {
    url: '',
    image: 'DELL.svg',
  },
  {
    url: '',
    image: 'DELLEMC.svg',
  },
  {
    url: '',
    image: 'PIVOTAL.svg',
  },
  {
    url: '',
    image: 'RSA.svg',
  },
  {
    url: '',
    image: 'SECUREWORKS.svg',
  },
  {
    url: '',
    image: 'VIRTUSTREAM.svg',
  },
  {
    url: '',
    image: 'VMWARE.svg',
  },

];


class Footer extends BaseComponent {

  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div className={styles.footer}>
        <div className={styles.mobile}>

        </div>
        <div className={styles.desktop}>
          <div className={styles.content}>
            <div className={styles.logos}>
                {
                  logos.map((item,index) => {
                    return(
                      <div className={styles.logo} key={index}>
                        {item.image &&
                          <img src={'images/' + item.image} />
                        }
                      </div>
                    );
                  })}
            </div>
            <div className={styles.policy}>
              Privacy Statement | Ads & Emails | Manage Cookies | ©2017  Dell Inc.
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Footer;