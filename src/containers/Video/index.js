import React from 'react';
import styles from './styles.scss';

import { connect } from 'react-redux';
import { getVideo, updateVideo } from '../../actions/videos';

import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom'

import BaseComponent from '../../../custom_modules/react-base';



class Video extends BaseComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      //console.log(this.props.match.params.slug);
      this.props.getVideo({slug: this.props.match.params.slug});
  }


  render() {
    //const video = API.getAllVideos(props.match.params.id);

    // if (!video) {
    //   return <div>Sorry, but that video was not found</div>
    // }

    return (
      <div>
        <Link to='/site'>Back</Link>
      </div>
    );

  }
}

const mapStateToProps = state => ({
  video: state.video,
});

const mapDispatchToProps = dispatch => ({
  getVideo: (video) => { dispatch(getVideo(video)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Video);
