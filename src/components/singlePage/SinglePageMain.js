import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actionCreators';

import CommentRow from './CommentRow';
import CommentBox from './CommentBox';
import StartupWidgetMoreInfo from './StartupWidgetMoreInfo';

import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';

import AppleStoreLogo from '../../static/App-Store-Badge.svg'
import GoogleStoreLogo from '../../../images/google-play-badge.png'
import LinkedLogo from '../../../images/linkedin.png'

const styles = {
  paper: {
    Width: '100%',
  },
}

class SinglePageMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      comments: [],
      username: '',
      commentAsyncCall: false,
      snackBarIsOpen: false,
      snackBarText: '',
    }
  }

  componentWillMount = () => {
    this.setState({
      product: this.props.product.product,
      comments: this.props.product.comments,
    })
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.username) {
      this.setState({username: nextProps.username})
    }

    if (nextProps.product) {
      this.setState({
        product: nextProps.product.product,
        comments: nextProps.product.comments
      })
    }
  }

  handlePostComment = (commentData) => {
    if (this.props.authenticated) {
      if (commentData.text.length > 1) {
        this.setState({commentAsyncCall: true})
        this.props.postNewComment(commentData, this.props.product.product.slug)
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
    if (this.state.product) {
      var name = this.state.product.name_en || '';
      var details = this.state.product.details;
      if (details) {
        var desc = details.description_en
      } else {
        var desc = ''
      }
    }
    const comments = this.state.comments || []
    return(
      <div>
        <Paper style={styles.paper} zDepth={3}>
          {this.props.children}
          <StartupWidgetMoreInfo
            product={this.state.product || {}}/>
          <div className="detailed-info">
            <div className="single-about">
              <span>{`About ${name}`}</span>
              <p>{desc}</p>
            </div>
          </div>
          {this.state.product &&
            <div className="single-link">
              {this.state.product.details.ios_app &&
              <a href={this.state.product.details.ios_app} target="_blank">
                <img src={AppleStoreLogo} alt=""/>
              </a>}
              {this.state.product.details.android_app &&
              <a href={this.state.product.details.android_app} target="_blank">
                <img src={GoogleStoreLogo} alt=""/>
              </a>}
              {this.state.product.details.linkedin &&
              <a href={this.state.product.details.linkedin} target="_blank">
                <img id='linkedin' src={LinkedLogo} alt=""/>
              </a>}
              <div className='divider'></div>
            </div>}
          <div className="comments">
            <span className="comment-title">Comments</span>
            <CommentBox
              authenticated={this.props.authenticated}
              handlePostComment={this.handlePostComment}
              commentAsyncCall={this.state.commentAsyncCall}/>
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
