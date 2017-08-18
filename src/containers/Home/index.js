import React from 'react';
import styles from './styles.scss';

import { connect } from 'react-redux';
import { getVideos, updateVideos } from '../../actions/videos';
import { getWatch, updateWatch } from '../../actions/watch';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import VideoSection from '../../components/VideoSection';

import BaseComponent from '../../../custom_modules/react-base';

class Home extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('videoHandler')
  }

  componentDidMount(){
      this.props.getVideos();
      this.props.getWatch();
  }

  videoHandler(slug){
    console.log(slug);
  }

  render() {

     let videos = (this.props.videos && this.props.videos.body) ? this.props.videos.body : null;
     let watch = (this.props.watch && this.props.watch.body) ? this.props.watch.body : null;

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
        {watch &&
        <div className={styles.watchWrapper}>
          <h2>Watch the way you want.</h2>
          <div className={styles.tileWrapper}>
            {watch.map((item,index) => {
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
        }
        <div>
        {videos && videos.length > 0 &&
          videos.map((item,index) => {
            return(
              <Link key={index} to={ '/site/video/' + item.slug }>
                <VideoSection data={item}/>
              </Link>
            );
          })}
        </div>
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

const mapStateToProps = state => ({
  videos: state.videos,
  watch: state.watch,
});

const mapDispatchToProps = dispatch => ({
  getVideos: () => { dispatch(getVideos()); },
  getWatch: () => { dispatch(getWatch()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
