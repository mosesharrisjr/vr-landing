
import React from 'react';
import styles from './styles.scss';

import { connect } from 'react-redux';
import { getVideos, updateVideos, getVideo, updateVideo } from '../../actions/videos';

import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom'

import {PropTypes} from "react-metrics";

import LearnMore from '../../components/LearnMore';
import BaseComponent from '../../../custom_modules/react-base';



class Video extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
    }
    this._bind('thumbnailClick','playVideo')
  }

  static contextTypes = {
    metrics: PropTypes.metrics
  };

  componentDidMount(){
      this.props.getVideo({slug: this.props.match.params.slug});
      this.props.getVideos();
      window.scroll(0,0);

      this.context.metrics.pageView(this.props.location.pathname);
  }

  thumbnailClick(slug){
      window.location = '/site/video/' + slug;
  }

  playVideo(){
    this.setState({playing: true});
  }

  render() {
    let video = (this.props.video && this.props.video.body) ? this.props.video.body : null;
    let videos = (this.props.videos && this.props.videos.body) ? this.props.videos.body : null;

    if (!video) {
      return (
        <div className={styles.videoWrapper}>
          <div className={styles.default}>Sorry, that video was not found</div>
        </div>
      );
    }

    function setAttributes(el, attrs) {
      for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }

    return (
      <div>
        <div className={styles.videoWrapper}>
          <div className={styles.wrangler}>
          <div className={styles.breadCrumb}>
            <ul>
              <li><Link to='/site'>Home</Link></li>
              <li>{video.title}</li>
            </ul>
          </div>

          {this.state.playing == false && video &&
            <div onClick={this.playVideo} className={styles.videoPane} style={
                  {
                    backgroundImage: 'url(/images/' + video.capture + ')',
                    backgroundRepeat: 'no-repeat',
                  }
                }>
              <div className={styles.playButton}>
                <img src="/images/playButton-white.svg"/>
              </div>
              <div className={styles.blurb}>
                <div className={styles.content}>
                  <div className={styles.title}>{video.title}</div>
                  <div className={styles.description} dangerouslySetInnerHTML={{__html: video.description}}>
                  </div>
                </div>
              </div>
            </div>
          }
          {this.state.playing && video &&
              <iframe
                ref={
                  node => node && setAttributes(node,
                  {
                    appid:"70d567ea0e05e5dd13fa84e7b34c311f",
                    vuuid: video.id,
                    allowfullscreen: "true",
                    webkitallowfullscreen: "true"
                  })
                }
                className={"vb-iframe-player " + styles.videoPane }>
              </iframe>
          }


          <div className={styles.watchMoreWrapper}>
            <h2>Watch more</h2>
            <div className={styles.thumbnails}>
              {videos && video && videos.length > 1 &&
                videos.map((thumb, index) => {
                  if(thumb.title !== video.title){
                    return (
                      <div onClick={()=> {this.thumbnailClick(thumb.slug)}} key={index} className={styles.thumbnail}>
                        <img src={'/images/' + thumb.thumb} />
                        <div className={styles.titleWrapper}>
                            <div className={styles.title}>
                              {thumb.title}
                            </div>
                        </div>
                      </div>
                    )
                  }
                })
              }
            </div>

          </div>
          </div>
        </div>
        <LearnMore />
      </div>
    );

  }
}

const mapStateToProps = state => ({
  video: state.video,
  videos: state.videos,
});

const mapDispatchToProps = dispatch => ({
  getVideo: (video) => { dispatch(getVideo(video)); },
  getVideos: () => { dispatch(getVideos()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Video);
