import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import StarRating from './StarRating';

import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const StartUpWidget = ({product, i}) => {
  const {name_en, average_p_rate, details, slug} = product;

  const styles = {
    logo: {
      width: 85,
      height: 85
    },
    container: {
      backgroundColor: 'white',
    },
  }
  const generateShortDesc = (desc) => {
    let shortDesc = desc.split(" ").splice(0,13).join(" ")
    if (shortDesc.split(' ').length < 13) return shortDesc;
    return `${shortDesc} ...`
  }
  const baseUrl = 'http://185.117.22.106:8000';
  return (
    <div style={styles.container}>
      <Link to={`start-ups/${slug}`}>
        <ListItem
          className='widget'
          secondaryTextLines={2}
          leftAvatar={<img src={baseUrl + details.logo} alt='logo' style={styles.logo} />}
          primaryText={null}
          secondaryText={null}>
            <div className='widget-title'>{name_en}</div>
            <div className='widget-text'>{generateShortDesc(details.description_en)}</div>
            <StarRating rating={average_p_rate} />
        </ListItem>
        {i < 24 ? <Divider inset={true} /> : ''}
      </Link>
    </div>
  );
};

StartUpWidget.propTypes = {
};

export default StartUpWidget;
