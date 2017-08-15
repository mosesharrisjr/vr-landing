import React from 'react';
import styles from './styles.scss';

import Video from '../../components/Video';

import BaseComponent from '../../../custom_modules/react-base';

const data = {
    watch: [
      {
      image: 'vrHeadset.svg',
      title: 'The App + Headset (Best)',
      description: 'Download the app and use a VR viewer for the ultimate experience.',
      },
      {
      image: 'mobile360.svg',
      title: 'Mobile 360 (Better)',
      description: 'Visit the mobile-optimizedsite on your phone. Using a VR viewer is recommended but not required.',
      },
      {
      image: 'desktop.svg',
      title: 'Desktop (Good)',
      description: 'Simply view the story and click to navigate. ',
      },
    ],
    videos: [
      {
        title: 'Accelerate Change',
        description: 'Otto Motors designs and manufactures autonomous robotic solutions for industrial use. See how Dell Technologies is facilitating the necessary communications signals for their self-driving vehicles.',
        background: 'otto.jpg'
      },
      {
        title: 'Swim with Whales',
        description: 'Adrian Grenier partnered with Dell Technologies to create a VR experience that transports viewers into the depths of the sea to draw awareness to how pollution has disrupted underwater life.',
        background: 'whales.jpg'
      },
      {
        title: 'Rock Out Backstage',
        description: 'The longest-running music television series, Austin City Limits is shot at the ACL Moody Theater and powered by Dell Technologies. Go behind the scenes of this cutting-edge music venue.',
        background: 'rockout.jpg'
      },
    ]

}

class Home extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('videoHandler')
  }

  videoHandler(){

  }

  render() {
    return(
      <div className={styles.contentWrapper}>
        <div className={styles.heroWrapper}>
          <div className={styles.hero}>
              <h1>VR stories of real transformation.</h1>
              <p>Every day, companies are modernizing IT and evolving business. Watch these VR videos to see how they’re achieving true digital transformation— in ways they never thought possible.</p>
          </div>
          <div className={styles.download}>
              <h2>Get the ultimate VR experience.</h2>
              <p>These videos can be viewed in multiple ways, but for the optimal experience, please download our Dell Technologies app and use a VR headset. </p>
              <div className={styles.buttons}>
                <div className={styles.button}><img src="images/itunesAppStore.svg" /></div>
                <div className={styles.button}><img src="images/googlePlay.svg" /></div>
              </div>
          </div>
        </div>
        <div className={styles.watchWrapper}>
          <h2>Watch the way you want.</h2>
          <div className={styles.tileWrapper}>
            {data.watch.map((item,index) =>{
              return(
                <div key={index} className={styles.tile}>
                  <div className={styles.icon}><img src={'images/' + item.image} /></div>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.description}>{item.description}</div>
                </div>
              );
            })}
          </div>
        </div>
        {data.videos.map((item,index) =>{
          return(
            <Video data={item} handler={this.videoHandler}/>
          );
        })}
        <div className={styles.learnWrapper}>
            <div className={styles.link}>
              <div className={styles.icon}>›</div>
              <div className={styles.cta}>Learn More</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
