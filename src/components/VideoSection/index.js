import React from 'react';
import styles from './styles.scss'

import BaseComponent from '../../../custom_modules/react-base';


class VideoSection extends BaseComponent {

  constructor(props) {
    super(props);
  }


  render(){
    return(
      <div className={styles.videoSection} style={{ backgroundImage: "url(/images/" + this.props.data.background + ")"}}>
        <div className={styles.playButton}>
          <img src="/images/playButton-white.svg"/>
        </div>
        <div className={styles.blurb}>
            <div className={styles.content}>
              <div className={styles.title}>{this.props.data.title}</div>
              <div className={styles.description} dangerouslySetInnerHTML={{__html: this.props.data.description}}></div>
            </div>
        </div>

      </div>
    );
  }
}

export default VideoSection;
