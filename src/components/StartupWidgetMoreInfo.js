import React, {PropTypes} from 'react';

import StarRating from './StarRating';
import Divider from 'material-ui/Divider';

const StartupWidgetMoreInfo = ({webSite, name, city, country, creationYear, shortDesc, rating, npsScore}) => {
  return (
    <div className="single-body">
      <img src={require('../../images/eventbox.jpg')} height='100px'/>
      <div>
        <span>
          <a href={webSite || ''}>{name || ''}</a>
          <span id='single-meta-info'>{`${city || ''},${country || ''}. founded in ${creationYear || ''}`}</span>
        </span>
        <span>{shortDesc || ''}</span>
        <StarRating rating={rating || 0} editAble={true} className='star-rating-single' />
        <span className="nps-score">{`N.P.S: ${npsScore || 0}`}</span>
      </div>
      <Divider />
    </div>
  );
}

StartupWidgetMoreInfo.propTypes = {
};

export default StartupWidgetMoreInfo;
