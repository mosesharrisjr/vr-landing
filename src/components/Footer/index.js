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

    let logos = (this.props.logos && this.props.logos.body) ? this.props.logos.body : null;

    return(
      <div className={styles.footer}>
        <div className={styles.desktop}>
          <div className={styles.content}>
            {logos &&
            <div className={styles.logos}>
                {
                  logos.map((item,index) => {
                    return(
                      <div className={styles.logo} key={index}>
                        {item.image &&
                          <img src={'/images/' + item.image} />
                        }
                      </div>
                    );
                  })}
            </div>
            }
            <div className={styles.policy}>
              <ul>
                <li>Privacy Statement</li>
                <li>Ads & Emails</li>
                <li>Manage Cookies</li>
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
