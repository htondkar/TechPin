import React, {PropTypes} from 'react';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import CircularProgress from 'material-ui/CircularProgress';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: '',
    }
  }

  handleTextFieldChange = (event, value) => {
    this.setState({commentText: value})
  }


  handleNewComment = () => {
    let commentData = {};
    commentData.commentText = this.state.commentText;
    commentData.date = new Date();
    this.props.handlePostComment(commentData);
  }

  render() {
    return (
      <div className="comment-box">
      <TextField
        hintText="Write A Comment"
        rows={3}
        multiLine={true}
        id='comment-field'
        onChange={this.handleTextFieldChange}
      />
      {this.props.commentAsyncCall ?
        <CircularProgress size={33.33} style={{marginBottom: '10px'}}/> :
        <IconButton
          style={{padding: 0}}><ContentAddCircle
          color='#2196F3'
          onClick={this.handleNewComment}/>
        </IconButton>
      }
      </div>
    );
  }
}

CommentBox.propTypes = {
};
