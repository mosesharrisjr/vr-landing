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

  clickHandler(type,location){
    this.context.metrics.track(type,);

    var href='';

    if(location == 'google')
      href = 'https://play.google.com/store/apps/details?id=tech.d3live.vrplayer.cardboard&hl=en';

    window.open(href, '_blank');

  }

  render() {
     let videoTest = [
       {
         slug: 'OTTOMotors',
         id: 'bdc2b0ddf670cd48b14c5d7dce3c612e',
         title: 'Accelerate Change',
         breadcrumb: 'Accelerate: OTTO Motors Experience',
         description: 'OTTO Motors designs and manufactures autonomous robotic solutions for industrial use. <br/><br/>See how Dell Technologies is facilitating the necessary communications signals for  their self-driving vehicles.',
         background: 'videoStills/OTTOVR-1440.jpg',
         capture: 'videoStills/OTTOVR-1366.jpg',
         thumb: 'videoStills/OTTOVR-534.jpg',

       },
       {
         slug: 'LonelyWhale',
         id: '55157e8cb8a93f99fa0a87d306824380',
         title: 'Swim with Whales',
         breadcrumb: 'Cry Out: The Lonely Whale Experience',
         description: 'Dell and Lonely Whale Foundation are doing their part to protect the seas by intercepting plastic before it enters our oceans and putting it to use in Dell product packaging.',
         background: 'videoStills/TLW-1440.jpg',
         capture: 'videoStills/TLW-1366.jpg',
         thumb: 'videoStills/TLW-534.jpg',
       },
       {
         slug: 'ACL',
         id: 'f9a6b7abb124def7888b6ee8866aa570',
         title: 'Rock Out Backstage',
         breadcrumb: 'Austin City Limits: Backstage Tour',
         description: 'The longest-running music television series, Austin City Limits is shot at the ACL Moody Theater and powered by Dell Technologies. Go behind the scenes of this cutting-edge music venue.',
         background: 'videoStills/ACLVR-1440.jpg',
         capture: 'videoStills/ACLVR-1366.jpg',
         thumb: 'videoStills/ACLVR-534.jpg',
       },
       {
         slug: 'ColumbiaVR',
         id: 'ac39b9436d83c3224bb678527befcdfd',
         title: 'Real Toughness, Real Results',
         breadcrumb: 'An IT Transformation Story',
         description: 'Having the right gear for the job is crucial. Columbia’s IT Transformation with Dell EMC has brought them to the forefront of 3-D design, enabling better fitting gear that is ready for any task.',
         background: 'videoStills/COLUMBIAVR-1440.jpg',
         capture: 'videoStills/COLUMBIAVR-1366.jpg',
         thumb: 'videoStills/COLUMBIAVR-534.jpg',
       },
     ];

     let videos = (this.props.videos && this.props.videos.body) ? this.props.videos.body : videoTest;
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
                <p>While these videos can be viewed in multiple ways, for an optimal experience, download our Dell Technologies VR app.</p>
                <div className={styles.buttons}>
                  {/* <div onClick={() => this.clickHandler('iTunes App Button')} className={styles.button}><img src="/images/itunesAppStore.svg" /></div> */}
                  <div onClick={() => {
                      this.clickHandler('Google Play App Button','google');

                    }} className={styles.button}><img src="/images/googlePlay.svg" /></div>
                  {/* <div onClick={() => this.clickHandler('Samsung Gear App Button')} className={styles.button}><img src="/images/samsungGear.svg" /></div> */}
                </div>
                {/* <br/><br/>
                <p style={{fontSize:'16px'}}>COMING SOON</p> */}
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
        {/* <Event /> */}
        <LearnMore />
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
