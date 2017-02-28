import React, {PropTypes} from 'react';

const CommentRow = ({comment}) => {
  return (
    <div className='comments-row'>
      <div>
        <div className="comment-author">{comment.author}:</div>
        <span className="comment-text">{comment.text}</span>
      </div>
    </div>
  );
}

CommentRow.propTypes = {
};

export default CommentRow;
