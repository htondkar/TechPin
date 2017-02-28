import React, {PropTypes} from 'react';

import StarRating from './StarRating';
import CommentRow from './CommentRow';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

import AppleStoreLogo from '../static/App-Store-Badge.svg'
import GoogleStoreLogo from '../../images/google-play-badge.png'
import LinkedLogo from '../../images/linkedin.png'

const styles = {
  paper: {
    Width: '100%',
    // minWidth: '650px',
    // height: '700px',
  },
}

export default class SinglePageMain extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
      const startUp = this.props.startUp || {};
      const comments = startUp.comments || [];
      return(
        <div>
          <Paper style={styles.paper} zDepth={3}>
            {this.props.children}
            <div className="single-body">
              <img src={require('../../images/eventbox.jpg')} height='100px'/>
              <div>
                <span>
                  <a href={startUp.webSite}>{startUp.name}</a>
                  <span id='single-meta-info'>{`${startUp.city},${startUp.country}. founded in ${startUp.creationYear}`}</span>
                </span>
                <span>{startUp.shortDesc}</span>
                <StarRating rating={startUp.rating} editAble={true} className='star-rating-single' />
                <span className="nps-score">{`N.P.S: ${startUp.npsScore}`}</span>
              </div>
              <Divider />
            </div>
            <div className="detailed-info">
              <div className="single-about">
                <span>{`About ${startUp.name}`}</span>
                <p>{startUp.longDesc}</p>
              </div>
            </div>

            <div className="single-link">
              <a href={startUp.iOsApp}><img src={AppleStoreLogo} alt=""/></a>
              <a href={startUp.androidApp}><img src={GoogleStoreLogo} alt=""/></a>
              <a href={startUp.linkedinProfile}><img src={LinkedLogo} alt=""/></a>
            </div>

            <Divider />

            <div className="comments">
              <span>Comments</span>
              {comments.map((comment, i) => <CommentRow comment={comment} key={i}/>)}
              <RaisedButton primary={true} label={this.props.authenticated ? 'post comment' : 'login to comment'} />
            </div>

          </Paper>
        </div>);
  }
}
