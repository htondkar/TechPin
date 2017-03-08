import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import StarRating from './StarRating';

import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const StartUpWidget = ({startUp, i}) => {
  const {name, rating, shortDesc} = startUp;

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
          leftAvatar={<img src={require('../../images/eventbox.jpg')} alt='logo' style={styles.logo} />}
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
