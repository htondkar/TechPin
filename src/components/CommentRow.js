import React, {PropTypes} from 'react';

import SocialPerson from 'material-ui/svg-icons/social/person'
import Avatar from 'material-ui/Avatar';

const CommentRow = ({comment}) => {
  return (
    <div className='comments-row'>
      <div>
        <div className='avatar'>
          <Avatar
            icon={<SocialPerson />}
          />
        </div>
        <div>
          <div className="comment-author">{comment.author}:</div>
          <span className="comment-text">{comment.commentText}</span>
          <span className="comment-date">
            {comment.date.toDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
CommentRow.propTypes = {
};

export default CommentRow;
