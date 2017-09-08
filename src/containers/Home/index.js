import React from 'react';
import styles from './styles.scss';

import {PropTypes} from "react-metrics";

import { connect } from 'react-redux';
import { getVideos, updateVideos } from '../../actions/videos';
import { getWatch, updateWatch } from '../../actions/watch';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import LearnMore from '../../components/LearnMore';
import VideoSection from '../../components/VideoSection';
import Event from '../../components/Events';

import BaseComponent from '../../../custom_modules/react-base';

import OnVisible, { setDefaultProps } from 'react-on-visible';

class Home extends BaseComponent {

  static contextTypes = {
    metrics: PropTypes.metrics
  };

  constructor(props) {
    super(props);
    this._bind('videoHandler','clickHandler')
  }

  componentDidMount(){
      this.props.getVideos();
      this.props.getWatch();

      this.context.metrics.pageView(this.props.location.pathname);
  }

  videoHandler(slug){
    //console.log(slug);
  }

  clickHandler(type){
    this.context.metrics.track(type,);
  }

  render() {

     let videos = (this.props.videos && this.props.videos.body) ? this.props.videos.body : null;
     let watch = (this.props.watch && this.props.watch.body) ? this.props.watch.body : null;

     setDefaultProps({
         bounce: true,
         visibleClassName: styles.visible,
         percent: 100
     });

    return(
      <div className={styles.contentWrapper}>

          <div className={styles.heroWrapper}>
            <div className={styles.wrangler}>
              <div className={styles.hero}>
                  <h1>Experience transformational stories in Virtual Reality.</h1>
                  <p>Every day, people and technology are coming together to transform their organizations. Watch these VR stories to experience it for yourself.</p>
              </div>
            </div>
            <div className={styles.download}>
                <h2>Get the ultimate streaming experience.</h2>
                {/* <p>These videos can be viewed in multiple ways, but for the optimal experience, please download our Dell Technologies VR app.</p> */}
                <p>While these videos can be viewed in multiple ways, for an optimal experience, soon you'll be able to download our Dell Technologies VR app.</p>
                <div className={styles.buttons}>
                  <div onClick={() => this.clickHandler('iTunes App Button')} className={styles.button}><img src="/images/itunesAppStore.svg" /></div>
                  <div onClick={() => this.clickHandler('Google Play App Button')} className={styles.button}><img src="/images/googlePlay.svg" /></div>
                  <div onClick={() => this.clickHandler('Samsung Gear App Button')} className={styles.button}><img src="/images/samsungGear.svg" /></div>
                </div>
            </div>
        </div>
        {watch &&
        <div className={styles.watchWrapper}>
          <div className={styles.wrangler}>
          <h2>Watch the way you want.</h2>
          <div className={styles.tileWrapper}>
            {watch.map((item,index) => {
              return(
                <OnVisible key={index} className={styles.tile} style={{transitionDelay: `${index % 3 * 100}ms`}}>
                    <div className={styles.icon}><img src={'/images/' + item.image} /></div>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.description}>{item.description}</div>
                </OnVisible>
              );
            })}
          </div>
          </div>
        </div>
        }
        <div>
        {videos && videos.length > 0 &&
          videos.map((item,index) => {
            return(
              <Link onClick={()=>{clickHandler(item.title + ' Landing Page Section');}} key={index} to={ '/' + item.slug }>
                <VideoSection data={item}/>
              </Link>
            );
          })}
        </div>
        <Event />
        {/* <LearnMore /> */}
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
