import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actionCreators';


import CommentRow from './CommentRow';
import CommentBox from './CommentBox';
import StartupWidgetMoreInfo from './StartupWidgetMoreInfo';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

import AppleStoreLogo from '../static/App-Store-Badge.svg'
import GoogleStoreLogo from '../../images/google-play-badge.png'
import LinkedLogo from '../../images/linkedin.png'

const styles = {
  paper: {
    Width: '100%',
  },
}

class SinglePageMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      commentAsyncCall: false,
      snackBarIsOpen: false,
      snackBarText: '',
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.username) {
      this.setState({username: nextProps.username})
    }
  }

  handlePostComment = (commentData) => {
    if (this.props.authenticated) {
      if (commentData.commentText.length > 1) {
        this.setState({commentAsyncCall: true})
        commentData.author = this.state.username;
        commentData.startupName = this.props.startUp.name;
        this.props.postNewComment(commentData)
        .then(response => {
          this.setState({commentAsyncCall: false});
          document.querySelector('#comment-field').value = '';
        })
      }
    } else {
      this.setState({snackBarIsOpen: true, snackBarText: 'please login first'})
    }
  }

  handleSnackBarClose = () => {
    this.setState({
      snackBarIsOpen: false,
    });
  };

  render() {
      const startUp = this.props.startUp || {};
      const comments = startUp.comments || [];
      return(
        <div>
          <Paper style={styles.paper} zDepth={3}>
            {this.props.children}
            <StartupWidgetMoreInfo {...startUp} />
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
              <div className='divider'></div>
            </div>
            <div className="comments">
              <span className="comment-title">Comments</span>
              <CommentBox
                authenticated={this.props.authenticated}
                handlePostComment={this.handlePostComment}
                commentAsyncCall={this.state.commentAsyncCall}
                />
              {comments.map((comment, i) => <CommentRow comment={comment} key={i}/>)}
            </div>
          </Paper>
          <Snackbar
            open={this.state.snackBarIsOpen}
            message={this.state.snackBarText}
            autoHideDuration={3500}
            onRequestClose={this.handleSnackBarClose}
          />
        </div>);
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    username: state.auth.username,
  }
}
export default connect(mapStateToProps, actions)(SinglePageMain);
