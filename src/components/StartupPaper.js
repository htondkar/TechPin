import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';

import StarRating from './StarRating';

const styles = {
  paper: {
    height: '350px',
    width: '250px',
    padding: '30px 20px',
  },
  img: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  }
};

const CategoryPaper = ({product, WrapperClassName}) => {
  return (
    <Link to={`/start-ups/${product.name}`}>
      <Paper style={styles.paper} className={`category-paper ${WrapperClassName}`}>
          <div className="category-image">
            <img style={styles.img} crossOrigin src={require('../../images/eventbox.jpg')} alt=""/>
          </div>
          <span><h3>{product.name}</h3></span>
          <div className="category-info-box">
            <div>{`${product.city}, ${product.country}`}</div>
            <div>{`Founded in ${product.creationYear}`}</div>
            <div>{`N.P.S: ${product.npsScore}`}</div>
          </div>
          <div id='paper-short-desc'>{product.shortDesc}</div>
      </Paper>
    </Link>
  );
}

CategoryPaper.propTypes = {
};

export default CategoryPaper;
