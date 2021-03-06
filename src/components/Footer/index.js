import React from 'react';
import styles from './styles.scss'

import { connect } from 'react-redux';
import { getLogos, updateLogos } from '../../actions/logos';
import { Route, Switch } from 'react-router';

import BaseComponent from '../../../custom_modules/react-base';


class Footer extends BaseComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getLogos();
  }

  render(){

    let logos;

    if (this.props.logos && this.props.logos.body){
      logos = this.props.logos.body ;
    }

    return(
      <div className={styles.footer}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            {logos &&
            <div className={styles.logos}>
                {
                  logos.map((item,index) => {
                    return(
                      <div className={styles.logo} key={index}>
                        {item.image &&
                          <a href={item.url} target='_blank'><img src={'/images/' + item.image} /></a>
                        }
                      </div>
                    );
                  })}
            </div>
            }
            <div className={styles.policy}>
              <ul>
                <li><a href='http://www.dell.com/learn/us/en/uscorp1/policies-privacy' target='_blank'>Privacy Statement</a></li>
                <li><a href='http://www.dell.com/learn/us/en/uscorp1/policies-ads-and-emails' target='_blank'>Ads & Emails</a></li>
                <li><a href='http://info.evidon.com/pub_info/8498' target='_blank'>Manage Cookies</a></li>
                <li>©2017  Dell Inc.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  logos: state.logos,
});

const mapDispatchToProps = dispatch => ({
  getLogos: () => { dispatch(getLogos()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
