import React from 'react';
import styles from './styles.scss';

import { connect } from 'react-redux';
import { getVideos, updateVideos, getVideo, updateVideo } from '../../actions/videos';

import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom'

import LearnMore from '../../components/LearnMore';
import BaseComponent from '../../../custom_modules/react-base';



class Video extends BaseComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      this.props.getVideo({slug: this.props.match.params.slug});
      this.props.getVideos();
  }


  render() {
    const video = (this.props.video && this.props.video.body) ? this.props.video.body : null;
    const videos = (this.props.videos && this.props.videos.body) ? this.props.videos.body : null;

    if (!video) {
      return (
        <div className={styles.videoWrapper}>
          <div className={styles.default}>Sorry, that video was not found</div>
        </div>
      );
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
          <div className={styles.videoPane} style={
              {
                background: 'url(/images/' + video.capture + ') no-repeat',
                backgroundPosition: '50% 50%',
                backgroundSize: "cover",
              }
            }>
            <div className={styles.playButton}>
              <img src="/images/playButton-white.svg"/>
            </div>
            <div className={styles.blurb}>
              <div className={styles.content}>
                <div className={styles.title}>{video.title}</div>
                <div className={styles.description}>{video.description}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.watchMoreWrapper}>
            <h2>Watch more</h2>
            <div className={styles.thumbnails}>
              {videos && video && videos.length > 1 &&
                videos.map((thumb, index) => {
                  if(thumb.title !== video.title){
                    return (
                      <div key={index} className={styles.thumbnail}>
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
