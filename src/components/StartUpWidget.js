import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import StarRating from './StarRating';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import ToggleStar from 'material-ui/svg-icons/toggle/star.js';
import ToggleStarHalf from 'material-ui/svg-icons/toggle/star-half.js';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

const StartUpWidget = ({startUp, i}) => {
  const {name, category, rating, ratedBy, shortDesc} = startUp;

  const subHeaderText = ratedBy === 'new' ? 'New' : `${ratedBy}'s choice`;

  const styles = {
    logo: {
      width: 85,
      height: 85
    },
    container: {
      backgroundColor: 'white',
    },
  }
  return (
    <div style={styles.container}>
      <Link to={`start-ups/${name}`}>
        <ListItem
          className={'widget'}
          secondaryTextLines={2}
          leftAvatar={<img src={require('../../images/eventbox.jpg')} style={styles.logo} />}
          primaryText={null}
          secondaryText={null}>
            <div className='widget-title'>{name}</div>
            <div className='widget-text'>{shortDesc}</div>
            <StarRating rating={rating} />
        </ListItem>
        {i < 24 ? <Divider inset={true} /> : ''}
      </Link>
    </div>
  );
};

StartUpWidget.propTypes = {
};

export default StartUpWidget;
